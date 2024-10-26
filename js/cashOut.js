document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById("input-cash-out");
    const PinNumber = getInputFieldValueById("input-cash-out-pin");
    // console.log("inside the click handler", cashOut, PinNumber);
    if (PinNumber === 1234) {
      const balance = getTextFieldById("account-balance");
      const newBalance = balance - cashOut;

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("No money for you...DGM");
    }
  });
