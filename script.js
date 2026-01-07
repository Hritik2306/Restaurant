var categories = [
  { name: "Lunch", short_name: "L" },
  { name: "Dinner", short_name: "D" },
  { name: "Sushi", short_name: "S" },
  { name: "Desserts", short_name: "DS" }
];

var vegMenuItems = [
  "🥗 Veg Salad",
  "🍛 Paneer Butter Masala",
  "🥘 Veg Biryani",
  "🍕 Veg Pizza",
  "🥙 Dal Tadka"
];

function showMenu() {
  document.getElementById("output").innerHTML = `
    <h2>Main Menu</h2>
    <p>Explore our delicious menu categories.</p>
  `;
}

function showVegMenu() {
  let list = "<h2>🌱 Veg Menu</h2><ul>";
  vegMenuItems.forEach(item => {
    list += `<li>${item}</li>`;
  });
  list += "</ul>";

  document.getElementById("output").innerHTML = list;
}

function loadRandomCategory() {
  let text = document.getElementById("special-text");
  text.innerHTML = "🎲 Choosing today’s special...";

  setTimeout(() => {
    let random = categories[Math.floor(Math.random() * categories.length)];
    text.innerHTML = "🍽️ Today’s Special: " + random.name;

    document.getElementById("output").innerHTML = `
      <h2>${random.name} Specials</h2>
      <p>Enjoy our chef’s recommended ${random.name} items.</p>
    `;
  }, 800);
}

function showMap() {
  document.getElementById("output").innerHTML = `
    <h2>📍 Our Location</h2>
    <iframe 
      src="https://www.google.com/maps?q=india&output=embed"
      width="100%" height="300"
      style="border-radius:12px;border:0;"
      loading="lazy">
    </iframe>
  `;
}
