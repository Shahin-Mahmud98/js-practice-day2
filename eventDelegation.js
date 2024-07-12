// event delegation important think

// const list = document.getElementById('list');

// list.addEventListener('click', (e)=>{
//     if (e.target.matches('li')) {
//         if (e.target.innerText === 'Java') {
//             e.target.style.backgroundColor = 'Yellow'
//         }else{
//             e.target.style.backgroundColor = 'blue'
//         }
//     }
// });

// function addElement(){
//     const newElement = document.createElement('li');
//     newElement.textContent = 'C';
//     list.appendChild(newElement);
// }

// const list = document.getElementById("list");

// list.addEventListener('click', (e)=>{
//     if(e.target.matches('li')){
//         if(e.target.innerText === 'Java'){
//             e.target.style.backgroundColor = 'yellow'
//         }else{
//             e.target.style.backgroundColor = 'blue';
//         }
//     }
// });

// function addElement() {
//     const newElement = document.createElement('li');
//     newElement.textContent = 'c'
//     list.appendChild(newElement);
// }


//practice 3

const list1 = document.getElementById("list");

list1.addEventListener("click", (e)=>{
    if (e.target.matches('li')) {
        if (e.target.innerText === 'Java') {
            e.target.style.backgroundColor = 'yellow'
        }else if(e.target.innerText === 'JavaScript') {
                e.target.style.backgroundColor = 'red'
            } else{
                e.target.style.backgroundColor = 'blue'
            }
        }

})


function addElement() {
    const newElement = document.createElement('li')
    newElement.textContent="Python";
    list1.appendChild(newElement);
}








// for each method

// const buttons = document.getElementById('button');
// buttons.forEach(button =>{
//     button.addEventListener('click',(e)=>{
//         console.log(e.target.innerText);
//     })
// })



