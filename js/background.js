const images = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');

// const bgImg = document.getElementById('bg-img').style.backgroundImage;
// console.log(bgImg);

const url = "url(img/" + chosenImage + ")";
document.getElementById('bg-img').style.backgroundImage = url;


//bgImage.src = `img/${chosenImage}`;

//document.body.appendChild(bgImage);