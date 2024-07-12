// var sakib = 
// {
//     name : "Sakib",
//     age : 34,
//     printPlayerName: function(){
//         console.log(this.name);
//     }
// }

// sakib.printPlayerName();

//<-- 2nd way function declare kore -->

const person = function(name,age){
    return{
        name:name,
        age: 5,
        printPlayerName:function () {
            console.log(this.name)
        }
    }
} 

var playerName = person("Shahin",45);

// console.log(playerName);
playerName.printPlayerName();



