import Icon from './images/restaurant.jpg';

export function HomepageLoad() {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const p_cont = document.createElement('div');
    const hero = document.createElement('div');
    const quote_box = document.createElement('div');
    const quote = document.createElement('p');
    const quoteHeader = document.createElement('h2');

    hero.setAttribute('id', 'hero');
    p_cont.setAttribute('id', 'pcontainer');
    container.setAttribute('id', 'homepagecontainer');
    h1.textContent = 'TZATZIKI';

    const myIcon = new Image();
    myIcon.src = Icon;

    quote_box.appendChild(quoteHeader);
    quoteHeader.textContent = 'Quote of the owner'; 
    quoteHeader.setAttribute('id', 'quote-header');

    quote.textContent = 'Sit laboris occaecat dolore Lorem officia laboris consequat esse irure consequat consequat commodo.Sit laboris occaecat dolore Lorem officia laboris consequat esse irure consequat consequat commodo.';
  
    quote_box.appendChild(quote);
    quote_box.setAttribute('id', 'quote');

    p.innerHTML = 'Exercitation do pariatur labore ex mollit officia. Fugiat labore qui commodo fugiat irure minim ad. Quis veniam ullamco irure ipsum laborum incididunt.<br><br>Esse sit pariatur proident sint magna. Irure in fugiat velit voluptate eiusmod adipisicing pariatur sit cupidatat. Aliqua dolore sit aliquip incididunt laborum veniam labore pariatur labore eu aute aute velit. Mollit sunt irure ullamco magna consequat eiusmod excepteur deserunt cillum ex Officia occaecat esse consequat amet consectetur quis anim Lorem fugiat non eu quis. Excepteur eiusmod nulla labore irure. Duis veniam incididunt anim reprehenderit ipsum do commodo consequat consectetur nisi consequat.';

    p_cont.appendChild(p);
    
    hero.appendChild(myIcon);
    hero.appendChild(p_cont);
    
    container.appendChild(h1);
    container.appendChild(hero);
    content.appendChild(container);
    container.appendChild(quote_box);
}
