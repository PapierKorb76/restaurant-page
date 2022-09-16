import Pizza1 from '../src/pizza-folder/pizza-1.png';
import Pizza2 from '../src/pizza-folder/pizza-2.png';
import Pizza3 from '../src/pizza-folder/pizza-3.png';
import Pizza4 from '../src/pizza-folder/pizza-4.png';
import Pizza5 from '../src/pizza-folder/pizza-5.png';
import Pizza6 from '../src/pizza-folder/pizza-6.png';

const body = document.querySelector("body");

export function menuPageLoad(){
   
    const pizzaArray = [Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6];
    const pizzaImages = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    const pizzaPricesContainer = ['5.60€', '9.60€', '12.50€', '8.40€', '6.30€', '13.40€'];
    const pizzaGridContainer = document.createElement("div");
    pizzaGridContainer.classList.add("image-pizza-container");

    pizzaImages.forEach((pizza, index = 0) => {
        pizza.src = pizzaArray[index];
        let pizzaContainer = document.createElement("div");
        let h1 = document.createElement("h1");
        let h3 = document.createElement("h3");
        h1.innerText = `Pizza #${index + 1}`;
        h3.innerText = pizzaPricesContainer[index];
        pizzaContainer.append(h1);
        pizzaContainer.append(pizza);
        pizzaContainer.append(h3);
        pizzaGridContainer.append(pizzaContainer);
        index++;
    });


    body.append(pizzaGridContainer);
}