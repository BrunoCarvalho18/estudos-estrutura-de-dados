//O(n ao quadrado)
//Péssimo algortimo
let count;

let line = "Meu nome é Bruno Carvalho Carvalho";

line = line.toLowerCase();

let words = [];

words = line.split(' ');

console.log('Duplicate words in given string');

for(let i = 0; i < words.length ; i++){
    count = 1;
    for(let j = i + 1;j < words.length; j++){
        if(words[i] === words[j]){
            count++;
            words[j] = "0";
        }
    }

    if(count >1 && words[i]!= "0"){
        console.log(words[i]);
    }

}




