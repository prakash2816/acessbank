const API_URL = "https://uc3ogmtyu8.execute-api.us-east-1.amazonaws.com/dev";

async function submit(type) {
  try {
    console.log("clicked:", type);

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, type })
    });

    const data = await res.json();
    document.getElementById("msg").innerText = data.message;
  } catch (err) {
    console.error(err);
    document.getElementById("msg").innerText = "Error. Check console.";
  }
}
