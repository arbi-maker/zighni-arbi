document.addEventListener('DOMContentLoaded', function() {
  const increaseButtons = document.querySelectorAll('.fa-plus-circle');
  const decreaseButtons = document.querySelectorAll('.fa-minus-circle');
  const deleteButtons = document.querySelectorAll('.fa-trash-alt');
  const likeButtons = document.querySelectorAll('.fa-heart');
  const totalPriceElement = document.querySelector('.total');

  let totalPrice = 0;

  // Function to update total price display
  function updateTotalPrice() {
    totalPriceElement.textContent = `${totalPrice} $`;
  }

  // Event listener for increasing quantity
  increaseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cardBody = button.closest('.card-body');
      const unitPrice = parseFloat(cardBody.querySelector('.unit-price').textContent.replace(' $', ''));
      const quantityElement = cardBody.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      totalPrice += unitPrice;
      updateTotalPrice();
    });
  });

  // Event listener for decreasing quantity
  decreaseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cardBody = button.closest('.card-body');
      const unitPrice = parseFloat(cardBody.querySelector('.unit-price').textContent.replace(' $', ''));
      const quantityElement = cardBody.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        totalPrice -= unitPrice;
        updateTotalPrice();
      }
    });
  });

  // Event listener for deleting an item
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = button.closest('.card');
      const cardBody = button.closest('.card-body');
      const unitPrice = parseFloat(cardBody.querySelector('.unit-price').textContent.replace(' $', ''));
      const quantity = parseInt(cardBody.querySelector('.quantity').textContent);
      totalPrice -= unitPrice * quantity;
      card.remove();
      updateTotalPrice();
    });
  });

  // Event listener for liking an item
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      button.classList.toggle('fas');
      button.classList.toggle('far');
      button.classList.toggle('active');
    });
  });
});