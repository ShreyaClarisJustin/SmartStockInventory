console.log("Signup JS loaded");


document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstname = document.getElementById("firstname-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const role = document.getElementById("role-input").value;

    if (!firstname || !email || !password || !role) {
        alert("All fields are required");
        return;
    }

    try {
        const res = await fetch("https://smartstock-backend-4.onrender.com/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstname, email, password, role })
        });

        const data = await res.json();

        if (data.error) {
            alert(data.error);
        } else {
            alert("Signup success! Please login.");
            window.location.href = "index.html"; // login page
        }
    } catch (error) {
        console.error("Signup error:", error);
        alert("Error: " + error.message);
    }
});

