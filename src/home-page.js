import Icon from './icon.png';

export function homePage(){
    const body = document.querySelector("body");
    const navbar = document.createElement("div");
    const ul = document.createElement("ul")
    const list = ["Home", "Menu", "Services", "Blog", "About", "Contacts"];
    const myIcon = new Image();

    myIcon.src = Icon;
    navbar.append(myIcon);

    navbar.classList.add("navbar");
    navbar.append(ul);
    list.forEach((listItem, li) => {
        li = document.createElement("li");
        li.innerText = listItem;
        ul.append(li);
    });
    
    body.append(navbar);
    console.log("Running module...");
}
