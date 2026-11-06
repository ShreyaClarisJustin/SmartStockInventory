document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    // const data = await res.json();

    // if (data.error) {
    //     alert(data.error);
    // } else {
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("role", data.role);
    //     localStorage.setItem("activeUser", JSON.stringify(data.user));

    //     if (data.role === "admin") {
    //         window.location.href = "admin-dashboard.html";
    //     } else {
    //         window.location.href = "employee-dashboard.html";
    //     }
    // }



    const data = await res.json();

console.log("FULL LOGIN RESPONSE ", data);
console.log("ROLE FROM BACKEND ", data.role);

if (data.error) {
    alert(data.error);
} else {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("activeUser", JSON.stringify(data.user));

    if (data.role === "admin") {
        window.location.href = "admin-dashboard.html";
    } else {
        window.location.href = "employee-dashboard.html";
    }
}

});
