const images = [
  "https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg",
  "https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
  "https://img.freepik.com/free-photo/rainbow-end-road-landscape_23-2151596720.jpg",
  "https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg",
  "https://avatars.mds.yandex.net/i?id=43f1a029d98aef8cb0091dba04947086_l-5292126-images-thumbs&n=27&h=480&w=480"
];

let correntIndex = 0;

const imageElement = document.querySelector(".current-imge");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const indicators = document.querySelectorAll(".indicator");

function upDateSlider() {
    imageElement.src = images[correntIndex];
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", correntIndex === index);
    });
};

prevButton.addEventListener('click', () =>{
    correntIndex = (correntIndex - 1 + images.length) % images.length;
    upDateSlider();
});

nextButton.addEventListener('click', () => {
    correntIndex = (correntIndex + 1) % images.length;
    upDateSlider();
});                                                                         


indicators.forEach(indicator => {
    indicator.addEventListener('click', (event) =>                                                                                                                                                                                                                                                                                                     {
        correntIndex = parseInt(event.target.getAttribute('data-index'));
        upDateSlider();
    })
});