let word = "unacademy";
let obj={}
word=word.split('');
// console.log(word)

word.forEach((element)=>{

  if(obj[element]){
    obj[element]++
  }
  else{
    obj[element]=1;
  }
})

let init=0;
let letter="";
for(let [key,value] of Object.entries(obj)){
      if(value>init){
      letter=key;
      init=value;
      }
}

console.log(letter);

// console.log(obj)



