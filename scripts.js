function retrieveSelections() {
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    const isChecked = localStorage.getItem(checkbox.value) === 'true';
    checkbox.checked = isChecked;
  })
}

function clearSelections() {
  localStorage.clear();
}

window.onload = function() {
  retrieveSelections();
  scrollFunction();
};

function showReceipt() {
  generateReceipt();
  document.querySelector('.floating-receipt').style.display = 'block';
}

function generateReceipt() {
  const receiptItems = document.getElementById('receipt-items');
  const totalBillElement = document.getElementById('total-bill');
  let totalBill = 0;

  receiptItems.innerHTML = '';

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    if (checkbox.checked) {
      const dishName = checkbox.value;
      const price = getPriceForDish(dishName);
      totalBill += price;

      const listItem = document.createElement('li');
      listItem.textContent = `${dishName} - ₱${price}`;
      receiptItems.appendChild(listItem);
    }
  });

  totalBillElement.textContent = `Total Bill: ₱${totalBill}`;
}

function getPriceForDish(dishName) {
  switch (dishName) {
    case 'Chicken Adobo':
      return 550;
    case 'Beef Bulalo':
      return 800;
    case 'Lechon Kawali':
      return 600;
    case 'Pork Sinigang':
      return 370;
    case 'Beef Steak(Bistek)':
      return 500;
    case 'Pinakbet':
      return 299;
    case 'Pancit Bihon':
      return 650;
    case 'Mongo-Guisado':
      return 259;
    case 'Garlic-Bokchoy':
      return 150;
    case 'Laing':
      return 159;
    case 'Lumpia-Sariwa':
      return 199;
    case 'Chop-Suey':
      return 450;
    case 'Ginataang Kalabasa':
      return 299;
    case 'Pinakbet':
      return 299;
    case 'Empanada':
      return 50;
    case 'Chicharon-Bulaklak':
      return 150;
    case 'Sisig':
      return 250;
    case 'Lumpiang Shanghai':
      return 150;
    case 'Pork Siomai':
      return 100;
    case 'Kinilaw':
      return 200;
    case 'Tokwa Baboy':
      return 250;
    case 'Buko Juice':
      return 99;
    case 'Melon Juice':
      return 99;
    case 'Pineapple Juice':
      return 99;
    case 'Sago\'t Gulaman':
      return 130;
    case 'Buko Pandan':
      return 130;
    case 'Salabat':
      return 99;
    case 'Kapeng Barako':
      return 99;
    default:
      return 0;
  }
}

function acknowledgeOrder() {
  clearSelections();
  document.querySelector('.receipt').style.display = 'none';
  location.reload(); // Reload the page
}

function redirectToReceipt() {
  // Redirect to the Receipt.html page
  window.location.href = "Receipt.html";
}

document.getElementById('orderButton').addEventListener('click', showReceipt);