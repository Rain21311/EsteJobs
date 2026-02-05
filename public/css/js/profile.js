// profile.js

// Mock user data (normally galing sa database)
let user = {
  id: 1,
  role: "regular"
};

const hireBtn = document.getElementById("hireBtn");
const roleBadge = document.getElementById("roleBadge");

if (user.role === "employer") {
  hireBtn.style.display = "none";
  roleBadge.textContent = "Employer / Hiring";
  roleBadge.className = "badge employer";
}

hireBtn.addEventListener("click", () => {
  window.location.href = "employer-form.html";
});
