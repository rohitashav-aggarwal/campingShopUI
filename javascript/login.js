function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("exampleInputPassword1").value;
    let loginForm = new FormData();
    loginForm.append("username", username);
    loginForm.append("password", password);
    fetch('https://rohitashavaggarwal768-eval-test.apigee.net/login?apikey=1k1DzXVyjhbHmkUimU8PrG5xIeBIg4am', {
        method: 'POST',
        body: loginForm
    }).then(function (res) {
        sessionStorage.setItem("apikey", res.headers.get("apikey"));
        document.getElementById("loginFunc").style.visibility = "hidden";
        document.getElementById("signupFunc").style.visibility = "hidden";
        document.getElementById("logoutFunc").style.visibility = "visible";
        alert("Login successful, Welcome " + username);
        return res.json();
    }).catch(function (err) {
        alert("Login unsuccessful, please signup.");
        console.log('error: ' + err);
    });
}