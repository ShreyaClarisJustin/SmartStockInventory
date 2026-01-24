// const token = localStorage.getItem("token");
// const role = localStorage.getItem("role");

// // If not logged in → send back
// if (!token) {
//     window.location.href = "index.html";
// }

// // Protect admin page
// if (window.location.pathname.includes("admin-dashboard.html") && role !== "admin") {
//     window.location.href = "index.html";
// }

// // Protect employee page
// if (window.location.pathname.includes("employee-dashboard.html") && role !== "employee") {
//     window.location.href = "index.html";
// }

// // Function to open pages
// function openPage(page) {
//     window.location.href = page;
// }

// // Logout
// document.getElementById("logout").addEventListener("click", () => {
//     localStorage.clear();
//     window.location.href = "index.html";
// });


const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

// If not logged in → send back to login
if (!token) {
    window.location.href = "index.html";
}

// Protect admin page
if (window.location.pathname.includes("admin-dashboard.html") && role !== "admin") {
    window.location.href = "index.html";
}

// Protect employee page
if (window.location.pathname.includes("employee-dashboard.html") && role !== "employee") {
    window.location.href = "index.html";
}

// Function to open pages
function openPage(page) {
    window.location.href = page;
}

// Logout (SAFE CHECK)
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "index.html";
    });
}
