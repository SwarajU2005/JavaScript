// Item Class
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Inventory Management Functions
let inventory = [
    new Item(1, 'apple', 10, 0.5),
    new Item(2, 'banana', 8, 0.8),
    new Item(3, 'orange', 15, 0.7)
];

function addItem(id, name, quantity, price) {
    inventory.push(new Item(id, name, quantity, price));
    console.log("After adding item: ", inventory);
}

function updateItem(id, newDetails) {
    let item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log("After updating item: ", inventory);
    } else {
        console.log("Item not found");
    }
}

function deleteItem(id) {
    let index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log("After deleting item: ", inventory);
    } else {
        console.log("Item not found");
    }
}

function getItem(id) {
    let item = inventory.find(item => item.id === id);
    if (item) {
        console.log("Item found: ", item);
        return item;
    } else {
        console.log("Item not found");
        return null;
    }
}

function printInventory() {
    console.log("Inventory: ", JSON.stringify(inventory, null, 2));
}

// Main Program
console.log("Initial Inventory: ", inventory);
addItem(4, 'grape', 10, 0.6);
updateItem(1, { quantity: 5, price: 0.5 });
deleteItem(3);
getItem(2);
printInventory();
