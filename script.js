const API = "https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Login failed"));
}
