//type and statments inside array

var qoutes_1 = ['No internet','yes internet'
];
var qoutes_2 = ['contact to administrator','st'
];

//function to chosse   random  statment from array
function clickon(){
var box=Math.floor(Math.random()*qoutes_1.length)
document.getElementById ('one').innerHTML=qoutes_1[box]  ;
document.getElementById ('two').innerHTML=qoutes_2[box]  ;

}