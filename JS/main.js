const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.getElementById("menuBox");

toggleMenuElement.addEventListener("click", () =>{
    mainMenuElement.classList.toggle("show");
});