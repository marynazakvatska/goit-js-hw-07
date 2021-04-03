const gallery = document.querySelector(`#gallery`);
gallery.setAttribute(`style`, `list-style: none; display: flex; justify-content: space-between;`)
const images = [
    {
        src:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        src:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        src:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const arrImages = images.reduce((liStr, elem) => liStr + `<li><img src="${elem.src}" alt="${elem.alt}"></li>`, ``);
gallery.insertAdjacentHTML(`beforeend`, arrImages);