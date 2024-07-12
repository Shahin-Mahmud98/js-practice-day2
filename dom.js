window.onload = function () {
    main();
}


function main() {
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const nameList = document.getElementById('nameList');

addBtn.addEventListener('click',function () {
    const li = document.createElement('li');
    li.innerText = input.value;
    nameList.appendChild(li);
    input.value = '';
    
});
}


// window.onload = function () {
//             main();
//         }

//         function main() {
//             const input = document.getElementById('input');
//             const addBtn = document.getElementById('addBtn');
//             const nameList = document.getElementById('nameList');

//             addBtn.addEventListener('click', function () {
//                 const li = document.createElement('li');
//                 li.innerText = input.value ;
//                 nameList.appendChild(li);
//                 // list.value = ""; // Clear the input after adding the name
//             });
//         }