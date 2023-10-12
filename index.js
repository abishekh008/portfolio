function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name !== '' && email !== '' && message !== '') {
    setTimeout(function() {
      alert("Sent successfully :)");
    }, 1000);
  } else {
    alert("Please fill in all fields.");
  }
}
