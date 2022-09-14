import Icon from './icon.png';
import PizzaHomepage from './pizza-first-page.png';

export function homePage(){
    const body = document.querySelector("body");

    /* NAVBAR */
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");

    const ul = document.createElement("ul")
    const list = ["Home", "Menu", "About Us"];
    list.forEach((listItem, li) => {
        li = document.createElement("li");
        li.innerText = listItem;
        ul.append(li);
    });
    const myIcon = new Image();
    myIcon.src = Icon;
    navbar.append(myIcon);
    navbar.append(ul);
    body.append(navbar);
    /* END NAVBAR */

    const pizzaHomepage = new Image();
    const mainContainer = document.createElement("div");
    const infoContainer = document.createElement("div");
    const imageContainer = document.createElement("div");
    const titlePizzack = document.createElement("h1");
    const descriptionHomepage = document.createElement("h3");
    const menuBtn = document.createElement("button");
    const aboutUsBtn = document.createElement("button");
    const btnContainer = document.createElement("div");
    pizzaHomepage.src = PizzaHomepage;
    mainContainer.classList.add("main-container");
    infoContainer.classList.add("info-container");
    imageContainer.classList.add("image-container");
    menuBtn.id = "view-menu-btn";
    aboutUsBtn.id = "about-us-btn";
    titlePizzack.innerText = "Pizzack!";
    descriptionHomepage.innerHTML = "The best italian pizza <br> with the best products possible.";
    infoContainer.append(titlePizzack);
    infoContainer.append(descriptionHomepage);
    infoContainer.style.animation = "1s ease-out 0s 1 slidePizzaStart"; 
    mainContainer.append(infoContainer);
    mainContainer.append(imageContainer);
    imageContainer.append(pizzaHomepage);
    btnContainer.classList.add("btn-container");
    menuBtn.innerText = "View Menu";
    aboutUsBtn.innerText = "About Us";
    btnContainer.append(menuBtn);
    btnContainer.append(aboutUsBtn);
    infoContainer.append(btnContainer);
    body.append(mainContainer);
    console.log("Running module...");
}

function transitionOnLoad(){

}
