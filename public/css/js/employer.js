// employer.js

document.getElementById("employerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("/api/upgrade-to-employer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      companyName: "Sample Company",
      businessType: "IT",
      contact: "sample@email.com",
      jobCategory: "Software",
      verification: "Valid ID"
    })
  });

  if (response.ok) {
    window.location.href = "subscription.html";
  }
});
