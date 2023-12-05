// Function to add an item to the shopping list
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemName = itemInput.value.trim();

    if (itemName !== '') {
        const shoppingList = document.getElementById('shoppingList');
        const listItem = document.createElement('li');

        // Create span element for item name
        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = itemName;

        // Create button for removing item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            listItem.remove();
        });

        // Append elements to list item
        listItem.appendChild(itemNameSpan);
        listItem.appendChild(removeButton);

        // Append list item to shopping list
        shoppingList.appendChild(listItem);

        // Clear the input field
        itemInput.value = '';
    }
}
