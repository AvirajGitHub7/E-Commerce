const products = [
  {
    id: 1,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f1.jpg",
    images: ["images/f1.jpg", "images/f2.jpg", "images/f3.jpg", "images/f4.jpg"]
  },
  {
    id: 2,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f2.jpg",
    images: ["images/f2.jpg", "images/f3.jpg", "images/f4.jpg", "images/f1.jpg"]
  },
  {
    id: 3,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f3.jpg",
    images: ["images/f3.jpg", "images/f1.jpg", "images/f2.jpg", "images/f4.jpg"]
  },
  {
    id: 4,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f4.jpg",
    images: ["images/f4.jpg", "images/f1.jpg", "images/f2.jpg", "images/f3.jpg"]
  },
  {
    id: 5,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f5.jpg",
    images: ["images/f5.jpg", "images/f6.jpg", "images/f7.jpg", "images/f8.jpg"]
  },
  {
    id: 6,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f6.jpg",
    images: ["images/f6.jpg", "images/f5.jpg", "images/f7.jpg", "images/f8.jpg"]
  },
  {
    id: 7,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f7.jpg",
    images: ["images/f7.jpg", "images/f5.jpg", "images/f6.jpg", "images/f8.jpg"]
  },
  {
    id: 8,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/f8.jpg",
    images: ["images/f8.jpg", "images/f5.jpg", "images/f6.jpg", "images/f7.jpg"]
  },
  {
    id: 9,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n1.jpg",
    images: ["images/n1.jpg", "images/n2.jpg", "images/n3.jpg", "images/n4.jpg"]
  },
  {
    id: 10,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n2.jpg",
    images: ["images/n2.jpg", "images/n1.jpg", "images/n3.jpg", "images/n4.jpg"]
  },
  {
    id: 11,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n3.jpg",
    images: ["images/n3.jpg", "images/n1.jpg", "images/n2.jpg", "images/n4.jpg"]
  },
  {
    id: 12,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n4.jpg",
    images: ["images/n4.jpg", "images/n1.jpg", "images/n2.jpg", "images/n3.jpg"]
  },
  {
    id: 13,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n5.jpg",
    images: ["images/n5.jpg", "images/n6.jpg", "images/n7.jpg", "images/n8.jpg"]
  },
  {
    id: 14,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n6.jpg",
    images: ["images/n6.jpg", "images/n5.jpg", "images/n7.jpg", "images/n8.jpg"]
  },
  {
    id: 15,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n7.jpg",
    images: ["images/n7.jpg", "images/n5.jpg", "images/n6.jpg", "images/n8.jpg"]
  },
  {
    id: 16,
    name: "Cartoon Astronaut T-shirt",
    brand: "Adidas",
    price: "$78",
    image: "images/n8.jpg",
    images: ["images/n8.jpg", "images/n5.jpg", "images/n6.jpg", "images/n7.jpg"]
  }
];

// 1️⃣ For sproduct.html (product detail page)
if (window.location.pathname.includes("sproduct.html")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = products.find(p => p.id === id);

  if (product) {
    const MainImg = document.getElementById("MainImg");
    const thumbnailContainer = document.getElementById("thumbnailContainer");

    MainImg.src = product.images[0];
    product.images.forEach(img => {
      const thumb = document.createElement("img");
      thumb.src = img;
      thumb.className = "small-img";
      thumb.style.width = "30%";
      thumb.onclick = () => (MainImg.src = img);
      thumbnailContainer.appendChild(thumb);
    });

    // Add to Cart
    document.getElementById("addtocart_button").addEventListener("click", () => {
      const qty = parseInt(document.querySelector("input[type='number']").value);
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ ...product, qty });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "cart.html";
    });
  } else {
    alert("Product not found");
  }
}

//Cart_Function
function updateCartTotal() {
  const rows = document.querySelectorAll(".add_carts tr");
  let subtotal = 0;

  rows.forEach(row => {
    const price = parseFloat(row.children[3].innerText.replace("$", ""));
    const qty = parseInt(row.children[4].querySelector("input").value);
    subtotal += price * qty;
  });

  document.querySelector(".cartTotal tr:nth-child(1) td:nth-child(2)").innerText = `$${subtotal.toFixed(2)}`;
  document.querySelector(".cartTotal tr:nth-child(3) td:nth-child(2)").innerText = `$${subtotal.toFixed(2)}`;
}


// 2️⃣ For cart.html
if (window.location.pathname.includes("cart.html")) {
  const cartTable = document.querySelector(".add_carts");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach(product => {
    const price = parseFloat(product.price.replace("$", ""));
    const subtotal = price * product.qty;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><i class="far fa-times-circle remove-btn" style="cursor:pointer"></i></td>
      <td><img src="${product.image}" width="50"></td>
      <td>${product.name}</td>
      <td>$${price.toFixed(2)}</td>
      <td><input type="number" value="${product.qty}" min="1" /></td>
      <td>$${subtotal.toFixed(2)}</td>
    `;
    cartTable.appendChild(tr);
    updateCartTotal();

    // Delete Row
    tr.querySelector(".remove-btn").addEventListener("click", () => {
    cart.splice( 1); // remove product from array
    localStorage.setItem("cart", JSON.stringify(cart)); // update localStorage
    tr.remove(); // remove from UI
    updateCartTotal();
    });

    // Update Subtotal
    tr.querySelector("input[type='number']").addEventListener("input", e => {
  const newQty = parseInt(e.target.value);
  const newSubtotal = newQty * price;
  tr.children[5].innerText = `$${newSubtotal.toFixed(2)}`;

  product.qty = newQty; // update qty in cart
  localStorage.setItem("cart", JSON.stringify(cart)); // update localStorage

  updateCartTotal(); // ✅ Update total
});
  });
}