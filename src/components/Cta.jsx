import React, { useEffect, useState } from "react";

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    countryCode: "+91",
    phone: "",
    teamSize: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================
  // VALIDATIONS
  // =========================
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPersonalEmail = (email) => {
    const domain = email.trim().toLowerCase().split("@")[1] || "";

    return [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "aol.com",
      "icloud.com",
      "protonmail.com",
      "proton.me",
      "zoho.com",
      "msn.com",
      "rediffmail.com",
    ].includes(domain);
  };

  const invalidCompanyValue = (value) => {
    const trimmed = value.trim();

    const providers =
      /^(?:gmail|yahoo|hotmail|outlook|live|aol|icloud|protonmail|zoho|msn)$/i;

    const simpleDomain =
      /^[^\s@]+\.(?:com|net|org|io|ai|co|biz|us|uk)$/i;

    return (
      trimmed.includes("@") ||
      validateEmail(trimmed) ||
      providers.test(trimmed) ||
      simpleDomain.test(trimmed)
    );
  };

  const validateForm = () => {
    const newErrors = {};

    // NAME
    if (formData.name.trim().length < 3) {
      newErrors.name = "Enter valid full name";
    }

    // COMPANY
    if (
      formData.company.trim().length < 2 ||
      invalidCompanyValue(formData.company)
    ) {
      newErrors.company =
        "Enter company name, not email or domain";
    }

    // EMAIL
    if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Enter valid work email";
    } else if (isPersonalEmail(formData.email)) {
      newErrors.email = "Enter your company/work email";
    }

    // PHONE
    const phone = formData.phone.replace(/\D/g, "");

    if (formData.countryCode === "+91") {
      if (!/^[6-9]\d{9}$/.test(phone)) {
        newErrors.phone =
          "Indian mobile number must contain exactly 10 digits";
      }
    } else {
      if (phone.length < 7 || phone.length > 14) {
        newErrors.phone =
          "Phone number must contain 7 to 14 digits";
      }
    }

    // TEAM SIZE
    if (!formData.teamSize) {
      newErrors.teamSize = "Select team size";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://getnos.io/dexkor-new-lp/main.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          biztype: formData.teamSize,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      window.location.href =
        "https://calendly.com/richard-dexkor/dexkor-demo-call-with-founder";
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.log(error);

    alert("Unable to connect to backend.");
  }

  setIsSubmitting(false);
};

  // =========================
  // RESET ON BACK
  // =========================
  useEffect(() => {
    const handlePageShow = () => {
      setFormData({
        name: "",
        company: "",
        email: "",
        countryCode: "+91",
        phone: "",
        teamSize: "",
      });

      setErrors({});
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <section className="form-section" id="form">
      <div className="form-section-inner">
        {/* LEFT */}
        <div>
          <div className="s-eyebrow">
            <span className="em"></span>
            Book a HelpDesk Demo
          </div>

          <h2 className="section">
            Show Us Your Stack.
            <em> We'll Show You the Leak.</em>
          </h2>

          <p className="s-deck">
            Bring your Zendesk bill and your ticket volume, we'll show you what
            14 days and 40% lower cost actually looks like for your team in 20
            minutes.
          </p>

          <ul className="hero-bullets">
            <li>
              <span className="check">✓</span>
              One-page side-by-side ROI for your CFO
            </li>

            <li>
              <span className="check">✓</span>
              14-day migration sketch with timing
            </li>

            <li>
              <span className="check">✓</span>
              No deck. No SDR cadence. No follow-up sequence.
            </li>
          </ul>
        </div>

        {/* FORM */}
        <div className="form-card">
          <h3>
            Pick your <em>working session</em> slot
          </h3>

          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            {/* ROW */}
            <div className="f-row">
              {/* NAME */}
              <div className="field">
                <label htmlFor="fname">
                  Full Name
                </label>

                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Your full name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <small className="error-text">
                  {errors.name}
                </small>
              </div>

              {/* COMPANY */}
              <div className="field">
                <label htmlFor="company">
                  Company
                </label>

                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your SaaS Co."
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                />

                <small className="error-text">
                  {errors.company}
                </small>
              </div>
            </div>

            {/* EMAIL */}
            <div className="field">
              <label htmlFor="email2">
                Work Email
              </label>

              <input
                type="email"
                id="email2"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />

              <small className="error-text">
                {errors.email}
              </small>
            </div>

            {/* PHONE */}
            <div className="field">
              <label htmlFor="phone2">
                Phone Number
              </label>

              <div className="phone-row">
                <select
                  id="cc2"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+93">🇦🇫 +93 Afghanistan</option>
  <option value="+355">🇦🇱 +355 Albania</option>
  <option value="+213">🇩🇿 +213 Algeria</option>
  <option value="+376">🇦🇩 +376 Andorra</option>
  <option value="+244">🇦🇴 +244 Angola</option>
  <option value="+54">🇦🇷 +54 Argentina</option>
  <option value="+374">🇦🇲 +374 Armenia</option>
  <option value="+61">🇦🇺 +61 Australia</option>
  <option value="+43">🇦🇹 +43 Austria</option>
  <option value="+994">🇦🇿 +994 Azerbaijan</option>
  <option value="+973">🇧🇭 +973 Bahrain</option>
  <option value="+880">🇧🇩 +880 Bangladesh</option>
  <option value="+375">🇧🇾 +375 Belarus</option>
  <option value="+32">🇧🇪 +32 Belgium</option>
  <option value="+501">🇧🇿 +501 Belize</option>
  <option value="+229">🇧🇯 +229 Benin</option>
  <option value="+975">🇧🇹 +975 Bhutan</option>
  <option value="+591">🇧🇴 +591 Bolivia</option>
  <option value="+387">🇧🇦 +387 Bosnia and Herzegovina</option>
  <option value="+267">🇧🇼 +267 Botswana</option>
  <option value="+55">🇧🇷 +55 Brazil</option>
  <option value="+673">🇧🇳 +673 Brunei</option>
  <option value="+359">🇧🇬 +359 Bulgaria</option>
  <option value="+226">🇧🇫 +226 Burkina Faso</option>
  <option value="+257">🇧🇮 +257 Burundi</option>
  <option value="+855">🇰🇭 +855 Cambodia</option>
  <option value="+237">🇨🇲 +237 Cameroon</option>
  <option value="+1">🇨🇦 +1 Canada</option>
  <option value="+238">🇨🇻 +238 Cape Verde</option>
  <option value="+236">🇨🇫 +236 Central African Republic</option>
  <option value="+235">🇹🇩 +235 Chad</option>
  <option value="+56">🇨🇱 +56 Chile</option>
  <option value="+86">🇨🇳 +86 China</option>
  <option value="+57">🇨🇴 +57 Colombia</option>
  <option value="+269">🇰🇲 +269 Comoros</option>
  <option value="+242">🇨🇬 +242 Congo</option>
  <option value="+506">🇨🇷 +506 Costa Rica</option>
  <option value="+385">🇭🇷 +385 Croatia</option>
  <option value="+53">🇨🇺 +53 Cuba</option>
  <option value="+357">🇨🇾 +357 Cyprus</option>
  <option value="+420">🇨🇿 +420 Czech Republic</option>
  <option value="+45">🇩🇰 +45 Denmark</option>
  <option value="+253">🇩🇯 +253 Djibouti</option>
  <option value="+20">🇪🇬 +20 Egypt</option>
  <option value="+503">🇸🇻 +503 El Salvador</option>
  <option value="+372">🇪🇪 +372 Estonia</option>
  <option value="+251">🇪🇹 +251 Ethiopia</option>
  <option value="+358">🇫🇮 +358 Finland</option>
  <option value="+33">🇫🇷 +33 France</option>
  <option value="+241">🇬🇦 +241 Gabon</option>
  <option value="+220">🇬🇲 +220 Gambia</option>
  <option value="+995">🇬🇪 +995 Georgia</option>
  <option value="+49">🇩🇪 +49 Germany</option>
  <option value="+233">🇬🇭 +233 Ghana</option>
  <option value="+30">🇬🇷 +30 Greece</option>
  <option value="+502">🇬🇹 +502 Guatemala</option>
  <option value="+224">🇬🇳 +224 Guinea</option>
  <option value="+592">🇬🇾 +592 Guyana</option>
  <option value="+509">🇭🇹 +509 Haiti</option>
  <option value="+504">🇭🇳 +504 Honduras</option>
  <option value="+852">🇭🇰 +852 Hong Kong</option>
  <option value="+36">🇭🇺 +36 Hungary</option>
  <option value="+354">🇮🇸 +354 Iceland</option>
  <option value="+91">🇮🇳 +91 India</option>
  <option value="+62">🇮🇩 +62 Indonesia</option>
  <option value="+98">🇮🇷 +98 Iran</option>
  <option value="+964">🇮🇶 +964 Iraq</option>
  <option value="+353">🇮🇪 +353 Ireland</option>
  <option value="+972">🇮🇱 +972 Israel</option>
  <option value="+39">🇮🇹 +39 Italy</option>
  <option value="+81">🇯🇵 +81 Japan</option>
  <option value="+962">🇯🇴 +962 Jordan</option>
  <option value="+7">🇰🇿 +7 Kazakhstan</option>
  <option value="+254">🇰🇪 +254 Kenya</option>
  <option value="+965">🇰🇼 +965 Kuwait</option>
  <option value="+996">🇰🇬 +996 Kyrgyzstan</option>
  <option value="+856">🇱🇦 +856 Laos</option>
  <option value="+371">🇱🇻 +371 Latvia</option>
  <option value="+961">🇱🇧 +961 Lebanon</option>
  <option value="+231">🇱🇷 +231 Liberia</option>
  <option value="+218">🇱🇾 +218 Libya</option>
  <option value="+370">🇱🇹 +370 Lithuania</option>
  <option value="+352">🇱🇺 +352 Luxembourg</option>
  <option value="+853">🇲🇴 +853 Macau</option>
  <option value="+261">🇲🇬 +261 Madagascar</option>
  <option value="+60">🇲🇾 +60 Malaysia</option>
  <option value="+960">🇲🇻 +960 Maldives</option>
  <option value="+223">🇲🇱 +223 Mali</option>
  <option value="+356">🇲🇹 +356 Malta</option>
  <option value="+52">🇲🇽 +52 Mexico</option>
  <option value="+976">🇲🇳 +976 Mongolia</option>
  <option value="+212">🇲🇦 +212 Morocco</option>
  <option value="+95">🇲🇲 +95 Myanmar</option>
  <option value="+977">🇳🇵 +977 Nepal</option>
  <option value="+31">🇳🇱 +31 Netherlands</option>
  <option value="+64">🇳🇿 +64 New Zealand</option>
  <option value="+234">🇳🇬 +234 Nigeria</option>
  <option value="+47">🇳🇴 +47 Norway</option>
  <option value="+968">🇴🇲 +968 Oman</option>
  <option value="+92">🇵🇰 +92 Pakistan</option>
  <option value="+507">🇵🇦 +507 Panama</option>
  <option value="+595">🇵🇾 +595 Paraguay</option>
  <option value="+51">🇵🇪 +51 Peru</option>
  <option value="+63">🇵🇭 +63 Philippines</option>
  <option value="+48">🇵🇱 +48 Poland</option>
  <option value="+351">🇵🇹 +351 Portugal</option>
  <option value="+974">🇶🇦 +974 Qatar</option>
  <option value="+40">🇷🇴 +40 Romania</option>
  <option value="+7">🇷🇺 +7 Russia</option>
  <option value="+250">🇷🇼 +250 Rwanda</option>
  <option value="+966">🇸🇦 +966 Saudi Arabia</option>
  <option value="+221">🇸🇳 +221 Senegal</option>
  <option value="+381">🇷🇸 +381 Serbia</option>
  <option value="+65">🇸🇬 +65 Singapore</option>
  <option value="+421">🇸🇰 +421 Slovakia</option>
  <option value="+386">🇸🇮 +386 Slovenia</option>
  <option value="+27">🇿🇦 +27 South Africa</option>
  <option value="+82">🇰🇷 +82 South Korea</option>
  <option value="+34">🇪🇸 +34 Spain</option>
  <option value="+94">🇱🇰 +94 Sri Lanka</option>
  <option value="+46">🇸🇪 +46 Sweden</option>
  <option value="+41">🇨🇭 +41 Switzerland</option>
  <option value="+963">🇸🇾 +963 Syria</option>
  <option value="+886">🇹🇼 +886 Taiwan</option>
  <option value="+255">🇹🇿 +255 Tanzania</option>
  <option value="+66">🇹🇭 +66 Thailand</option>
  <option value="+216">🇹🇳 +216 Tunisia</option>
  <option value="+90">🇹🇷 +90 Turkey</option>
  <option value="+993">🇹🇲 +993 Turkmenistan</option>
  <option value="+256">🇺🇬 +256 Uganda</option>
  <option value="+380">🇺🇦 +380 Ukraine</option>
  <option value="+971">🇦🇪 +971 United Arab Emirates</option>
  <option value="+44">🇬🇧 +44 United Kingdom</option>
  <option value="+1">🇺🇸 +1 United States</option>
  <option value="+598">🇺🇾 +598 Uruguay</option>
  <option value="+998">🇺🇿 +998 Uzbekistan</option>
  <option value="+58">🇻🇪 +58 Venezuela</option>
  <option value="+84">🇻🇳 +84 Vietnam</option>
  <option value="+967">🇾🇪 +967 Yemen</option>
  <option value="+260">🇿🇲 +260 Zambia</option>
  <option value="+263">🇿🇼 +263 Zimbabwe</option>
                </select>

                <input
                  type="tel"
                  id="phone2"
                  name="phone"
                  placeholder="98XXXXXXXX"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <small className="error-text">
                {errors.phone}
              </small>
            </div>

            {/* TEAM SIZE */}
            <div className="field">
              <label htmlFor="size">
                Support Team Size
              </label>

              <select
                id="size"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
              >
                <option value="">
                  Select team size
                </option>

                <option value="under_5">
                  Just me / under 5
                </option>

                <option value="5_15">
                  5 to 15 agents
                </option>

                <option value="15_50">
                  15 to 50 agents
                </option>

                <option value="50_200">
                  50 to 200 agents
                </option>

                <option value="200_plus">
                  200+ agents
                </option>
              </select>

              <small className="error-text">
                {errors.teamSize}
              </small>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className={`form-submit ${
                isSubmitting
                  ? "disabled-btn"
                  : "enabled-btn"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting..."
                : "Pick My Slot Now →"}
            </button>

            <p className="f-fine">
              After you submit, you go straight to the booking calendar to lock
              a time that fits your schedule. No newsletter. No SDR cadence.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
