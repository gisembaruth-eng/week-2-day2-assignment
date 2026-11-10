const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');

function addItem() {
  const itemText = itemInput.value.trim();

  if (!itemText) {
    alert('Please enter an item first.');
    return;
  }

  const listItem = document.createElement('li');
  const text = document.createElement('span');
  text.textContent = itemText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.type = 'button';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.appendChild(text);
  listItem.appendChild(deleteButton);
  shoppingList.appendChild(listItem);
  itemInput.value = '';
  itemInput.focus();
}

addButton.addEventListener('click', addItem);

itemInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
});
