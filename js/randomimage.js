const myButton = document.querySelector('button');
const image = document.querySelector('.box')
const images = ["11.jpg", "12.jpg", "13.jpg", "14.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {
    console.log(images);

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex); 
    images.style.backgroundColor = images[randomIndex]
}
    