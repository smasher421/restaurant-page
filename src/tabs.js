import createContactPage from "./contact";
import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";


const createTabs = () => {
    const content = document.querySelector('#content');


    //create 3 divs

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set ids for each div

    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');


    //set classes for each div

    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');


    //set text content for each div

    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';


    //append the divs to the content div


    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);


    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })
    div1.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })

}


function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");

    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default createTabs;
