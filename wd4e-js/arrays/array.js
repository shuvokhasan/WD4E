let fruits = ['Banana', 'Mango', 'Apple', 'Orange'];

function loadFruits(){
    document.getElementById('fruits').innerHTML = fruits;
}

function addFruit(){
    let fruit = prompt('Enter your fruit name');
    fruits[fruits.length] = fruit;
    document.getElementById('fruits').innerHTML = fruits;
}