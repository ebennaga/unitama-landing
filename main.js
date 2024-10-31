function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_v84mxlw", "template_zlx6h7a", params)
    .then((res) => {
      console.log(res);
      alert("Your Message Sent Successfully");
    })
    .catch((err) => console.log(err));
}
