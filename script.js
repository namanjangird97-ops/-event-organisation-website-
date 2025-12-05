function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
// Remove HTML and script tags from JavaScript file.
// Place the following function in your JS file:

function showNumber() {
  document.getElementById("phone").innerText = "📞 +91 788876xxx";
}


// Close modal when clicking outside
window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target == modal) 
    modal.style.display = "none";
  }
} // Preview uploaded photo
document.getElementById("photoUpload").addEventListener("change", function(e){
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(event){
      const img = document.getElementById("preview");
      img.src = event.target.result;
      img.style.display = "block";
    }
    reader.readAsDataURL(file);
  }
});

// On form submit
document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMsg").style.display = "block";
  document.getElementById("signupForm").reset();
  document.getElementById("preview").style.display = "none";
});