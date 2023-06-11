//esta funcion se hizo para calcular todo lo del carrito del carro


export const totalPrice =(products)=>{
let sum = 0
products.forEach(product=> { sum +=product.price  
})
  return sum
}