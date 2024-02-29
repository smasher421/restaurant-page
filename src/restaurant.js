//logic for restaurant.js

const createRestaurantHomePage = () => { 
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('.page-content');
}


//create and append the img element 

const image = document.createElement("img");
image.src = 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg';
image.height = '300';
pageContent.appendChild(image); //the pagecontent in this case is the div I created in the above function



//create and append the head element


const headline = document.createElement('h1');
headline.textContent = 'Welcome to our restaurant!';
pageContent.appendChild(headline);


//create and append the copy element
const copy = document.createElement('p');
copy.textContent = 'We serve the best food in town. Come and see!';
pageContent.appendChild(copy);


content.appendChild(pageContent);



export default createRestaurantHomePage;