const options = ['https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg', 'https://e.staedtlercdn.com/fileadmin/_processed_/5/9/csm_HK_STAEDTLER-Writing-pens_ab1c510ce9.jpg', 'https://cdn01.allaboutart.co.uk/media/5xonjxg4/fcpcs36_sg1.jpg', 'https://www.giftoo.in/cdn/shop/products/Untitleddesign-2022-12-16T160756.634.png?v=1671187330', 'https://www.garnerstationery.com/wp-content/uploads/2023/04/Pencil-sharpner-Double-Hole.jpg', 'https://down-ph.img.susercontent.com/file/14069d25bb974aab40b698773b154e68']

function pickImage(){
    randomImage = options[Math.floor(Math.random() * options.length)];
    image = document.querySelector('img');
    image.setAttribute('src', randomImage);
}