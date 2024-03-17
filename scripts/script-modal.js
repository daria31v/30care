const dialog = document.getElementById("myDialog");
const backdrop = document.getElementById("backdrop");
const closeButton = document.getElementById("closeDialog");
const openButtons = document.querySelectorAll(".openDialog");


openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
    backdrop.style.display = "block";
    openButtons.disabled = true;
  });
});

closeButton.addEventListener("click", () => {
  dialog.close();
  backdrop.style.display = "none";
  openButtons.disabled = false;
});



