document.getElementById("addProductForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const productData = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    supplier: document.getElementById("supplier").value,
    sku: document.getElementById("sku").value,
    price: Number(document.getElementById("price").value),
    stock: Number(document.getElementById("quantity").value),
    lowStockLimit: Number(document.getElementById("lowStockLimit").value)
  };

  const res = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(productData)
  });

  const data = await res.json();
  alert(data.message || data.error);
});
