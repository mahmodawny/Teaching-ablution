// document.querySelector('.controls-btn span').addEventListener('click', () => {

//     let name = prompt("ادخل اسمك");

//     if (name === null || name === '') {
//         document.querySelector('.name span').innerHTML = 'لم يتم ادخال اسم';
//     } else {
//         document.querySelector('.name span').innerHTML = name;

//     }
//     document.querySelector('.controls-btn').remove()
  
// })

// unOrderImages

let unOrderImages = document.querySelector('.unOrder-images')
let images = Array.from(unOrderImages.children)
let reorderImage = [...Array(images.length).keys()]

let currentStep = 0;


reorderImage = shuffle(reorderImage)

images.forEach((image , index)=>{

    image.style.order = reorderImage[index]

    image.addEventListener('click',()=>{

        // console.log(image.dataset.ablution);

        if(image.dataset.ablution === correctReorderArray[currentStep]){

            console.log('good');

            currentStep++
        }

        else{

            console.log('bad');
        }
    })

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

let correctReorderArray =  ["intention","rinsing","inhalation","Washing-the-face","wash-hands-elbows","head-wipe","ear-wiping","washing-feet"];

// order-images

let orderImagesContainer = document.querySelector(".order-images")
let orderImages = Array.from(orderImagesContainer.children)
let correctReorderImages = [...Array(orderImages.length).keys()]


