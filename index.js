function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name !== '' && email !== '' && message !== '') {
      alert("Sent successfully : )");
  } else {
      alert("Please fill in all fields.");
  }
}
