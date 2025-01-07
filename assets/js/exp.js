const images = [
    {
        img: "https://via.placeholder.com/300",
        title: "Experience Title 1",
        description: "Description of the experience 1. This could be details about the image."
    },
    {
        img: "https://via.placeholder.com/300/ff0000",
        title: "Experience Title 2",
        description: "Description of the experience 2. This could be details about the image."
    },
    {
        img: "https://via.placeholder.com/300/00ff00",
        title: "Experience Title 3",
        description: "Description of the experience 3. This could be details about the image."
    }
];

let currentIndex = 0;

function updateImage() {
    const imageBox = document.getElementById("imageBox");
    const frontImage = imageBox.querySelector(".image-front img");
    const backTitle = imageBox.querySelector(".image-back h3");
    const backDescription = imageBox.querySelector(".image-back p");

    frontImage.src = images[currentIndex].img;
    backTitle.textContent = images[currentIndex].title;
    backDescription.textContent = images[currentIndex].description;

    imageBox.style.transform = "rotateY(0deg)";
}

function move(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateImage();
}

document.querySelector(".image-box").addEventListener("click", function () {
    const imageBox = document.getElementById("imageBox");
    imageBox.style.transform = "rotateY(180deg)";
});
