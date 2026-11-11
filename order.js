const orderForm = document.getElementById("order-form");
const quantityInputs = Array.from(orderForm.querySelectorAll('input[type="number"]'));
const grandTotal = document.getElementById("grand-total");
const orderMessage = document.getElementById("order-message");
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

function isValidQuantity(input) {
  const quantity = Number(input.value);
  return input.value.trim() !== "" &&
    input.validity.valid &&
    Number.isInteger(quantity) &&
    quantity >= 0;
}

function updateGrandTotal() {
  const hasInvalidQuantity = quantityInputs.some((input) => !isValidQuantity(input));

  quantityInputs.forEach((input) => {
    input.setAttribute("aria-invalid", String(!isValidQuantity(input)));
  });

  if (hasInvalidQuantity) {
    grandTotal.textContent = "Fix quantities";
    return;
  }

  const totalCents = quantityInputs.reduce((total, input) => {
    const priceCents = Number(input.closest(".menu-item").querySelector(".item-price").dataset.priceCents);
    return total + Number(input.value) * priceCents;
  }, 0);

  grandTotal.textContent = currencyFormatter.format(totalCents / 100);
}

quantityInputs.forEach((input) => {
  input.addEventListener("input", () => {
    orderMessage.textContent = "";
    orderMessage.classList.remove("success");
    updateGrandTotal();
  });
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateGrandTotal();

  const invalidInput = quantityInputs.find((input) => !isValidQuantity(input));
  if (invalidInput) {
    orderMessage.textContent = "Cannot proceed to place order. Enter a non-negative whole number for every quantity.";
    alert("Bad input. Cannot proceed to place order. Every quantity must be a non-negative integer.");
    invalidInput.focus();
    return;
  }

  orderMessage.textContent = `Order placed successfully. Your total is ${grandTotal.textContent}.`;
  orderMessage.classList.add("success");
});
