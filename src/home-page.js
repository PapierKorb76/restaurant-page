import PizzaHomepage from './pizza-first-page.png';
import * as bg from "./background.js";

export function homePageLoad(){
    const body = document.querySelector("body");

    //This loads navbar and the background image that will be loaded in every tab
    bg.loadBackground();

    /* MAIN CONTAINER */
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");
    
    /* END MAIN CONTAINER */


    /* INFO CONTAINER */
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    infoContainer.style.animation = "1s ease-out 0s 1 slideTextStart"; 

    const titlePizzack = document.createElement("h1");
    titlePizzack.innerText = "Pizzack!";

    const descriptionHomepage = document.createElement("h3");
    descriptionHomepage.innerHTML = "The best italian pizza<br>with the best products possible.";

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    const menuBtn = document.createElement("button");
    const aboutUsBtn = document.createElement("button");
    menuBtn.id = "view-menu-btn";
    aboutUsBtn.id = "about-us-btn";
    menuBtn.innerText = "View Menu";
    aboutUsBtn.innerText = "About Us";

    btnContainer.append(menuBtn);
    btnContainer.append(aboutUsBtn);

    infoContainer.append(titlePizzack);
    infoContainer.append(descriptionHomepage);
    infoContainer.append(btnContainer);
    /* END INFO CONTAINER */


    /* IMAGE CONTAINER */
    const pizzaHomepage = new Image();
    pizzaHomepage.src = PizzaHomepage;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    imageContainer.style.animation = "1s ease-out 0s 1 slidePizzaStart";
    
    imageContainer.append(pizzaHomepage);
    /* END IMAGE CONTAINER */

    body.append(mainContainer);
    mainContainer.append(infoContainer);
    mainContainer.append(imageContainer);
    console.log("Running module...");
}