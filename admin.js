// Dummy login (username: admin, password: 12345)
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "admin" && pass === "12345"){
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    document.getElementById("loginError").style.display = "block";
  }
});

// Add Event
document.getElementById("eventForm").addEventListener("submit", function(e){
  e.preventDefault();

  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const venue = document.getElementById("eventVenue").value;
  const desc = document.getElementById("eventDesc").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${title}</strong> (${date}) - ${venue}<br>${desc}`;

  document.getElementById("eventList").appendChild(li);

  document.getElementById("eventForm").reset();
});

