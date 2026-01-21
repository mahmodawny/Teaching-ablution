document.querySelector('.controls-btn span').addEventListener('click', () => {

    let name = prompt("ادخل اسمك");

    if (name === null || name === '') {
        document.querySelector('.name span').innerHTML = 'لم يتم ادخال اسم';
    } else {
        document.querySelector('.name span').innerHTML = name;

    }
    document.querySelector('.controls-btn').remove()
  
})

let unOrderImages = document.querySelector('.unOrder-images')
let images = Array.from(unOrderImages.children)
let reorderImage = [...Array(images.length).keys()]

reorderImage = shuffle(reorderImage)

images.forEach((image , index)=>{

    image.style.order = reorderImage[index]
})

function shuffle(array){

    let current = array.length,
        temp,
        random;

        while(current > 0){

            random = Math.floor(Math.random() * current); // 3

            current--;

            temp = array[current]  // 7

            array[current] = array[random]

            array[random] = temp


        }
        return array;
}