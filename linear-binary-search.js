// Busca Linear O(N)
function linearSearch(array,target){
   let index = -1
   let count = 0
   for(let i =0; i < array.length;i++){
    count ++
    if(array[i] ==target){
        console.log('A busca linear levou: ' + count)
        index = i
    }
   }
   return index
}

//Busca Binaria O(log N) + 1 O(log N)
function binarySearch(array,targer){
    // ordenar array caso nao seja ordenado
    let firstIndex = 0
    let lastIndex = array.length - 1
    let midIndex = 0
    let count = 0

    while(lastIndex > firstIndex){
        count ++
        midIndex = Math.floor((firstIndex + lastIndex) / 2)
        if (target > array[midIndex]){
            firstIndex = midIndex  + 1
        }else if(target < array[midIndex]) {
           lastIndex = midIndex -1
        }else{
            console.log('A busca binária levou: ' + count)
            return midIndex
        }
    }
    return -1

}

const array = [1,2,3,4,5,6,7,8]
const target = 7
const linearIndex = linearSearch(array,target)
const binaryIndex = binarySearch(array,target)

console.log('Buscar linear - Achou o elemento no index: '+ linearIndex)
console.log('Buscar binária - Achou o elemento no index: '+ binaryIndex)
