function showContactForm() {

    let contactForm = "<form id=\"contact-form\">\n" +
        "  <div class=\"form-group\">\n" +
        "    <label for=\"name\">Name</label>\n" +
        "    <div class=\"row\">\n" +
        "       <div class=\"col-lg-3\">\n" +
        "           <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\" required>\n" +
        "       </div>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "  <div class=\"form-group\">\n" +
        "     <label for=\"email\">Email</label>\n" +
        "     <div class=\"row\">\n" +
        "        <div class=\"col-lg-3\">\n" +
        "            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email Id\" required>\n" +
        "        </div>\n" +
        "     </div>\n" +
        "  </div>\n" +
        "  <div class=\"form-group\">\n" +
        "     <label for=\"message\">Brief Message</label>\n" +
        "     <div class=\"row\">\n" +
        "        <div class=\"col-lg-6\">\n" +
        "           <textarea class=\"form-control\" id=\"message\" rows=\"3\" required></textarea>\n" +
        "        </div>\n" +
        "     </div>\n" +
        "  </div>\n" +
        "  <button type=\"button\" onclick=\'sendMessage()\' class=\"btn btn-primary\">Send Message</button>\n" +
        "</form>";
    document.getElementById("header").style.fontSize = "large";
    document.getElementById("header").innerHTML = "Contact Me!";
    document.getElementById("myData").innerHTML = contactForm;
}

function sendMessage() {
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("message", document.getElementById("message").value);
    fetch('https://rohitashavaggarwal768-eval-test.apigee.net/contact', {
        method: 'POST',
        body: form
    }).then(function (response) {
        alert("Message Sent, Thank you for contacting.");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        return response.status;
    }).catch(function (err) {
        console.log('error: ' + err);
    });
}