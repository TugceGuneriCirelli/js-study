
let color='blue';
let result= (color=='blue') ? 'right color' : 'trying again' ;
console.log(result);


let brand='mac';
let inch=21;
let result2=inch>=21 ? brand=='mac' ? 'good for developer' : brand=='asus' ? 'asus good for dev':
'try del or lenova':'think one more time'
console.log(result2);

let actress='jennifer lawrence';
let movie='the hunger game';
console.log(`${actress} is played in ${movie}`);


////////////
function greet(){
    return 'hi'
  }
  console.log(greet())
  
  function greet1(name){
    return 'hi '+name
  }
  console.log(greet1('tugce'))
  
  
  let greet2=function(name){
    return 'hi ' +(name)
  }
  console.log(greet2('sena'));
  
  /// Arrow Function ////
  
  ///1
  const greet4=(name)=>{
    return 'hi '+ name
  }
  console.log(greet4('zak'))
  
  ////2
  const greet5=(name)=> 'hi '+name
  console.log(greet5('sultan'))
  
  ///3
  const greet6=name=>'hi ' + name
  console.log(greet6('bayram'))
  
  
  //get a num from user using arrow func. and multply by 10
  
  const number1=number=>number*10
  console.log(number1(2))