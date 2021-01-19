function signUp() {
    let username = document.getElementById("username1").value;
    let password = document.getElementById("exampleInputPassword2").value;
    let signUpForm = new FormData();
    signUpForm.append("username", username);
    signUpForm.append("password", password);
    fetch('https://rohitashavaggarwal768-eval-test.apigee.net/signup', {
        method: 'POST',
        body: signUpForm
    }).then(function (response) {
        alert("Sign up successful.");
        return response.status;
    }).catch(function (err) {
        alert("Sign up unsuccessful, please try after some time.");
        console.log('error: ' + err);
    });
}