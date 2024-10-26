// console.log("add money");

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // console.log("add btn clicked");

    // getInputFieldValueById();

    // const addMoney = getInputFieldValueById();
    // console.log("add money value", addMoney);

    // const addMoney = getElementById("btn-add-money").value;
    // const addMoneyNumber =
    // parseFloat(addMoney);

    const addMoney = getInputFieldValueById("input-add-money");
    const PinNumber = getInputFieldValueById("input-pin-number");

    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }

    //
    if (PinNumber === 1234) {
      const balance = getTextFieldById("account-balance");
      console.log(balance, addMoney);
      const newBalance = balance + addMoney;

      document.getElementById("account-balance").innerText = newBalance;
      // add trans history
      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
      console.log(p);
      //  should be a common function

      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("failed to add the money");
    }
  });
