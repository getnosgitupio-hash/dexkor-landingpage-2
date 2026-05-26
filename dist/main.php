<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed.',
    ]);
    exit;
}

$json = json_decode(file_get_contents('php://input') ?: '', true);
$body = is_array($json) ? $json : $_POST;

function field(string $key, array $body): string
{
    return trim((string)($body[$key] ?? ''));
}

function is_personal_email(string $email): bool
{
    $domain = strtolower(substr(strrchr($email, '@') ?: '', 1));
    $personalDomains = [
        'gmail.com',
        'yahoo.com',
        'hotmail.com',
        'outlook.com',
        'live.com',
        'aol.com',
        'icloud.com',
        'protonmail.com',
        'proton.me',
        'zoho.com',
        'msn.com',
        'rediffmail.com',
    ];

    return in_array($domain, $personalDomains, true);
}

$name = field('name', $body);
$company = field('company', $body);
$email = field('email', $body);
$phone = field('phone', $body);
$teamSize = field('biztype', $body) ?: field('teamSize', $body);

$errors = [];

if (mb_strlen($name) < 3) {
    $errors[] = 'Enter a valid full name.';
}

if (mb_strlen($company) < 2) {
    $errors[] = 'Enter a valid company name.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Enter a valid work email.';
} elseif (is_personal_email($email)) {
    $errors[] = 'Enter your company/work email.';
}

if (mb_strlen(preg_replace('/\D+/', '', $phone)) < 7) {
    $errors[] = 'Enter a valid phone number.';
}

if ($teamSize === '') {
    $errors[] = 'Select team size.';
}

if ($errors !== []) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
    ]);
    exit;
}

$lead = [
    'created_at' => date('c'),
    'name' => $name,
    'company' => $company,
    'email' => $email,
    'phone' => $phone,
    'team_size' => $teamSize,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
];

$file = __DIR__ . '/leads.csv';
$isNewFile = !file_exists($file);
$handle = fopen($file, 'ab');

if ($handle === false) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to save lead.',
    ]);
    exit;
}

if ($isNewFile) {
    fputcsv($handle, array_keys($lead));
}

fputcsv($handle, $lead);
fclose($handle);

echo json_encode([
    'success' => true,
    'message' => 'Lead saved successfully.',
]);
