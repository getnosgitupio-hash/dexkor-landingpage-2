<?php

header("Content-Type: application/json");

// =========================
// ONLY POST METHOD
// =========================
if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Invalid Request"
    ]);

    exit;
}

// =========================
// SANITIZE INPUTS
// =========================
function clean($data) {
    return htmlspecialchars(trim($data));
}

$data = json_decode(file_get_contents("php://input"), true);

$name     = clean($data["name"] ?? "");
$email    = clean($data["email"] ?? "");
$phone    = clean($data["phone"] ?? "");
$company  = clean($data["company"] ?? "");
$biztype  = clean($data["biztype"] ?? "");

// =========================
// VALIDATION
// =========================
if (
    empty($name) ||
    empty($email) ||
    empty($phone) ||
    empty($company) ||
    empty($biztype)
) {

    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
    ]);

    exit;
}

// =========================
// EMAIL VALIDATION
// =========================
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid Email"
    ]);

    exit;
}

// =========================
// BLOCK PERSONAL EMAILS
// =========================
$blockedDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "live.com",
    "icloud.com",
    "aol.com",
    "protonmail.com",
    "zoho.com"
];

$emailDomain = strtolower(substr(strrchr($email, "@"), 1));

if (in_array($emailDomain, $blockedDomains)) {

    echo json_encode([
        "success" => false,
        "message" => "Please enter your work email"
    ]);

    exit;
}

// =========================
// EMAIL SETTINGS
// =========================
$to = "sriethiraj@getnos.io";
$subject = "New Strategy Call Lead - Dexkor";

// =========================
// LOGO
// =========================
$logo = "https://getnos.io/db-new-lp/logo.png";

// =========================
// EMAIL TEMPLATE
// =========================
$message = '
<html>
<head>
  <title>New Lead</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">

<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;">

<tr>
<td style="background:#0B0B0B;padding:30px;text-align:center;">

<img src="'.$logo.'" alt="dexkor" style="max-width:180px;">

</td>
</tr>

<tr>
<td style="padding:40px;">

<h2 style="margin-top:0;color:#111;font-size:28px;">
New Strategy Call Lead
</h2>

<p style="font-size:16px;color:#666;">
A new lead has been submitted from the landing page.
</p>

<table width="100%" cellpadding="12" cellspacing="0" style="margin-top:25px;border-collapse:collapse;">

<tr>
<td style="background:#f8f8f8;font-weight:bold;width:180px;">
Full Name
</td>
<td style="background:#fafafa;">
'.$name.'
</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Email
</td>
<td style="background:#fafafa;">
'.$email.'
</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Phone Number
</td>
<td style="background:#fafafa;">
'.$phone.'
</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Company
</td>
<td style="background:#fafafa;">
'.$company.'
</td>
</tr>

<tr>
<td style="background:#f8f8f8;font-weight:bold;">
Business Type
</td>
<td style="background:#fafafa;">
'.$biztype.'
</td>
</tr>

</table>

</td>
</tr>

<tr>
<td style="padding:24px;text-align:center;background:#fafafa;color:#777;font-size:13px;">
� '.date("Y").' Dexkor. All rights reserved.
</td>
</tr>

</table>

</td>
</tr>

</table>

</body>
</html>
';

// =========================
// EMAIL HEADERS
// =========================
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Dexkor <hello@getnos.io>" . "\r\n";
$headers .= "Reply-To: ".$email . "\r\n";

// =========================
// SEND EMAIL
// =========================
$mailSent = mail($to, $subject, $message, $headers);

// =========================
// RESPONSE
// =========================
if ($mailSent) {

    echo json_encode([
        "success" => true,
        "message" => "Lead submitted successfully"
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Email sending failed"
    ]);

}
?>