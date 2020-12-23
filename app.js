const mainDiv = document.querySelector('.main-container')
const button = document.querySelector('.btnChange')

const gridDiv = document.createElement('div')
const testDiv = document.createElement('div')

function createDivs(gSize = 14){
    let totalSize = gSize * gSize;
    console.log(totalSize)
    for(let i = 0; i < totalSize; i++){

        mainDiv.appendChild(testDiv.cloneNode(true))
        .addEventListener('mouseover', function(e){
            console.log('mouse')
            e.target.classList.add('divStyleFilled')
        })
        console.log('printing')
    }
}

button.addEventListener('click', function(){
    let newGrid = prompt('Enter new grid amount')
    mainDiv.style.cssText = `grid-template-columns: repeat(${newGrid}, 1fr); grid-template-rows: repeat(${newGrid}, 1fr)`;
    // mainDiv.style.cssText = `grid-template-rows: repeat(${newGrid}, 1fr)`
    console.log(mainDiv)
    createDivs(newGrid)
})

createDivs()







