const menuScreen = document.querySelector("#menu-screen");
const welcomeScreen = document.querySelector("#welcome-screen");
const aboutDialog = document.querySelector("#about-dialog");

document.querySelector("#start-button").addEventListener("click", () => {
    menuScreen.hidden = true;
    welcomeScreen.hidden = false;
    document.querySelector("#welcome-title").focus();
});

document.querySelector("#back-button").addEventListener("click", () => {
    welcomeScreen.hidden = true;
    menuScreen.hidden = false;
    document.querySelector("#start-button").focus();
});

document.querySelector("#about-button").addEventListener("click", () => {
    aboutDialog.showModal();
});

document.querySelector("#close-dialog").addEventListener("click", () => {
    aboutDialog.close();
    document.querySelector("#about-button").focus();
});
