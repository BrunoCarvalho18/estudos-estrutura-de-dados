var nums = [1,6,7,8,20,22,24] 

function busca_binaria(nums, left, right, valor){ 
    if(right >= left){   
      indice = parseInt(left + (right-left)/2) 

      if(nums[indice] === valor){ 
        return valor
      }
      if(nums[indice] > valor){ 
        return busca_binaria(nums, left, indice-1, valor)
      }

      return busca_binaria(nums, indice+1, right, valor) 
    }

    return "não achou"
}

console.log(busca_binaria(nums, 0, nums.length-1, 25));