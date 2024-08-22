const categories = {
    "Frutas": [],
    "Lacteos": [],
    "Congelados": [],
    "Dulces": [],
    "Otros": []
};

document.getElementById("response").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        startInteraction();
    }
});

function startInteraction() {
    const userResponse = document.getElementById("response").value.toLowerCase().trim();
    
    if (userResponse === "si") {
        addFood();
    } else if (userResponse === "no") {
        displayList();
    } else {
        alert("Por favor, responde con 'si' o 'no'.");
    }
    
    document.getElementById("response").value = "";
}

function addFood() {
    const food = prompt("¿Qué alimento deseas agregar?");
    let category = prompt("¿En qué categoría encaja ese alimento? (Frutas, Lácteos, Congelados, Dulces, Otros)").trim().toLowerCase();
    
    // Convertir la primera letra de la categoría a mayúscula para coincidir con las categorías predefinidas
    category = category.charAt(0).toUpperCase() + category.slice(1);
    
    if (categories.hasOwnProperty(category)) {
        categories[category].push(food);
    } else {
        categories["Otros"].push(food);
    }
    
    if (confirm("¿Deseas agregar otro alimento?")) {
        addFood();
    } else {
        displayList();
    }
}

function displayList() {
    const shoppingList = document.getElementById("shoppingList");
    shoppingList.innerHTML = ""; // Clear previous list

    for (const [category, items] of Object.entries(categories)) {
        if (items.length > 0) {
            const listItem = document.createElement("li");
            listItem.textContent = `${category}: ${items.join(", ")}`;
            shoppingList.appendChild(listItem);
        }
    }
    
    document.getElementById("interactionArea").style.display = "none";
    document.getElementById("resultArea").style.display = "block";
}
