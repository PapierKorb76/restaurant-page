import aboutUsImage from "../src/about-us-image.jpeg"
const body = document.querySelector("body");

export function aboutUsPageLoad(){
    const aboutPizzaImage = new Image();
    aboutPizzaImage.src = aboutUsImage;

    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.classList.add("about-us-container");

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.innerText = "About Us";
    p.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex possimus unde ipsam, recusandae aliquam mollitia corporis eligendi esse dolor quidem incidunt eaque facilis repudiandae est id ullam laborum fugiat in? Quam inventore sequi ea rem sed dolorum, modi veritatis rerum.";
    aboutUsContainer.append(h1);
    aboutUsContainer.append(p);
    aboutUsContainer.append(aboutPizzaImage);
    body.append(aboutUsContainer);
}