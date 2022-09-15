import { homePageLoad } from './home-page';
import Icon from './icon.png';
export function loadBackground(){
        
    /* NAVBAR */
    const body = document.querySelector("body");
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const ul = document.createElement("ul")
    const list = ["Home", "Menu", "About Us"];
    list.forEach((listItem, li) => {
        li = document.createElement("li");
        li.innerText = listItem;
        ul.append(li);
    });


    ul.childNodes[0].addEventListener("click", () => {
        loadBackground();
        body.innerHTML = "";
        homePageLoad();
    });

    ul.childNodes[1].addEventListener("click", () => {
        body.innerHTML = "";
        loadBackground();
    });

    ul.childNodes[2].addEventListener("click", () => {
        body.innerHTML = "";
        loadBackground();
    });

    const myIcon = new Image();
    myIcon.src = Icon;
    navbar.append(myIcon);
    navbar.append(ul);
    body.append(navbar);
    /* END NAVBAR */
}