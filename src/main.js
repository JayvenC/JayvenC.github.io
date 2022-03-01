import 'bootstrap'
import './assets/app.scss'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

let clickButton = document.querySelector(".detailsClick")
let popupWindow = document.querySelector(".detailsPopup")
let close = document.querySelector(".closeDetails")
let detailsBody = document.querySelector(".bodyOfDetails")
let exploreTitle = document.querySelector(".slogan")

clickButton.addEventListener("click", function () {
    popupWindow.classList.remove("window-exit");
    popupWindow.classList.add("window-add");
    detailsBody.classList.remove("details-exit");
    detailsBody.classList.add("details-show");
    exploreTitle.classList.add("title-remove")
});

close.addEventListener("click", function () {
    popupWindow.classList.remove("window-add");
    popupWindow.classList.add("window-exit");
    detailsBody.classList.remove("details-show");
    detailsBody.classList.add("details-exit");
    exploreTitle.classList.remove("title-remove");
});