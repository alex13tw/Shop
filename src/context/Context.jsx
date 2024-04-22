import React, { createContext,  useReducer } from 'react'
import faker from 'faker';
import { cartReducer } from './Reducer';
import { productReducer } from './Reducer';

const coolImages = require("cool-images");
export const Cart = createContext()
faker.seed(99)
const Context = ({children}) => {
    const product =[...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: coolImages.one(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(), 
        ratings: faker.random.arrayElement([1 , 2, 3, 4, 5])

    }))

     const [productState,productDispatch] = useReducer(productReducer,{
      byStock:false,
      byFastDelivery:false,
      byRating:0,
      searchQuery:"",
      
     })

     const [state,dispatch] = useReducer(cartReducer,{
      product:product,
      cart:[]
     })

    console.log(product);

  return (
    <Cart.Provider value={{ state  ,dispatch, productState , productDispatch }}>
        {children}
    </Cart.Provider>
  )
}

export default Context



