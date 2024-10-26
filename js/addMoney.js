// console.log("add money");

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log("add btn clicked");

    // getInputFieldValueById();

    // const addMoney = getInputFieldValueById();
    // console.log("add money value", addMoney);

    // const addMoney = getElementById("btn-add-money").value;
    // const addMoneyNumber =
    // parseFloat(addMoney);

    const addMoney = getInputFieldValueById("input-add-money");
    const PinNumber = getInputFieldValueById("input-pin-number");
    if (PinNumber === "1234") {

    } 
    else {
        alert('failed to add the money')
    }
  });
