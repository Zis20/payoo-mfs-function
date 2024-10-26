document
  .getElementById("show-add-money-form")
  .addEventListener("click", function () {
    console.log("sho add money button");
    showSectionById("add-money-form");
  });

document
  .getElementById("show-cash-out-form")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });
document.getElementById("show-t").addEventListener("click", function () {
  showSectionById("t-section");
});
