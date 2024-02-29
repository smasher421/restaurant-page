//module for creating the menu page

const createMenuPage = () => { 
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';


    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Pasta';
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Pizza';
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Pomodoro';

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);


    pageContent.appendChild(heading); //append the heading that is on top first
    pageContent.appendChild(menuList); //then append the menu list TO WHICH I appended the menu Items first
    content.appendChild(pageContent); //afterwards above it I append the div which contains all this info
    
}

export default createMenuPage;