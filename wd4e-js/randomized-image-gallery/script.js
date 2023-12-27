function setImages(){
    const options = ['1.webp', '2.jpg', '3.jpg', '4.webp'];

    const currentImages = document.querySelectorAll('.flex img');

    for(let i = 0; i < currentImages.length; i++){
        console.log('Image' + i);
        randomImage = options[Math.floor(Math.random() * options.length)];

        currentImages[i].src = 'imgs/' + randomImage;
        currentImages[i].setAttribute('tabindex', '0');
    }
}