let playerNameValue = ''

document.querySelector('.controls-btn span').addEventListener('click', () => {


    let name = prompt("ادخل اسمك");

    if (name === null || name === '') {
       playerNameValue = 'لم يتم ادخال اسم';
    } else {
       playerNameValue = name;

    }
    document.querySelector('.name span').innerHTML = playerNameValue;

    document.querySelector('.controls-btn').remove()
  
})

// unOrderImages

let unOrderImages = document.querySelector('.unOrder-images')
let images = Array.from(unOrderImages.children)
let reorderImage = [...Array(images.length).keys()]


let currentStep = 0;

let tries = document.querySelector('.tries span')

reorderImage = shuffle(reorderImage)

images.forEach((image , index)=>{

    image.style.order = reorderImage[index]

    image.addEventListener('click',()=>{
        
        checkOrder(image)
       
    })

})

// order-images

let orderImagesContainer = document.querySelector(".order-images")
let orderImages = Array.from(orderImagesContainer.children)


let successSound = document.querySelector('.success')
let failSound = document.querySelector('.fail')


let correctReorderArray =  ["intention", "wash-hands" ,"rinsing","inhalation","Washing-the-face","wash-hands-elbows","head-wipe","ear-wiping","washing-feet"];


function checkOrder(image){

    if(image.dataset.ablution === correctReorderArray[currentStep]){


        orderImagesContainer.appendChild(image)

        image.style.order = currentStep

        image.style.pointerEvents = "none"

        currentStep++

        successSound.play()

    
        if(currentStep === correctReorderArray.length){
           
            putPlayerInfoInBoard()
        }

    }

    else{

        failSound.play()

        tries.innerHTML = parseInt(tries.innerHTML)+1

    }

    return image
}

// putPlayerInfoInBoard function

let board = document.querySelector('.honor-board')

let ordered =0 ;

function putPlayerInfoInBoard(){

    let playerLow = document.createElement('div')

    playerLow.classList.add('board-row')

    board.appendChild(playerLow)

    let playerOrder = document.createElement('div')

    playerOrder.classList.add('player-order')

    playerLow.appendChild(playerOrder)

    ordered++;

    playerOrder.innerHTML = ordered;

    let playerName = document.createElement('div')

    playerName.classList.add('player-name')

    playerName .innerHTML = playerNameValue;

    playerLow.appendChild(playerName)

    let playerMistakes = document.createElement('div')

    playerMistakes.classList.add('player-mistakes')

    playerMistakes.innerHTML = tries.innerHTML

    playerLow.appendChild(playerMistakes)

    localStorage.setItem('boardHTML', board.innerHTML)

}


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

if(localStorage.getItem('boardHTML')){

    board.innerHTML = localStorage.getItem('boardHTML')

}

ordered = board.querySelectorAll('.board-row').length