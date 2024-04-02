export function AboutPageLoad() {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const content = document.querySelector('#content');
    const container=document.createElement('div');
    const p_cont=document.createElement('div');
    const hero=document.createElement('div');

    hero.setAttribute('id','hero');
    p_cont.setAttribute('id','pcontainer')
    container.setAttribute('id','homepagecontainer')
    h1.textContent = 'About';
    img.src = "../images/restaurant.jpg";
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam quam doloremque consequatur nemo, sed facere eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam quam doloremque consequatur nemo, sed facere eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam quam doloremque consequatur nemo, sed facere eveniet';

    p_cont.appendChild(p);
    
    hero.appendChild(img);
    hero.appendChild(p_cont);
    
    container.appendChild(h1);
    container.appendChild(hero);
    content.appendChild(container);
}