document.getElementById("payNowBtn").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="paymentOption"]:checked');
  
    if (!selectedOption) {
      alert("Please select a payment option.");
      return;
    }
  
  switch (selectedOption.value) {
    case "phonepe":
      window.location.href = 'phonepe.html';
      break;

    case "googlepay":
      window.location.href = 'googlepay.html';
      break;

    case "cod":
      window.location.href = 'cod.html';
      break;

    default:
      alert("Unsupported payment option selected.");
  }
});
  