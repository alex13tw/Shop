import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import { Cart } from '../context/Context'

const Filters = () => {
    const {productState:{byStock, byFastDelivery, byRating, sort, searchQuery},productDispatch} = useContext(Cart)

        console.log(byStock,
            byFastDelivery,
            byRating,sort,      
            )
    const [rate,setRate]= useState(4)       
  return (      
    <div className='filters'>       
    <span className='title'>Filter Products</span>      
    <span>          
    <Form.Check         
        inline          
        label="Accending"       
        name='group1'       
        type='radio'    
        id={`inline-1`}         
        onChange={(i)=>productDispatch({    
            type:"sort_by_price",       
            playload:"lowToHigh"        
        })}     
        checked={ sort==="lowToHigh"?true:false }       
    />      
    </span>     
    <span>         
    <Form.Check                 
        inline                  
        label="Desending"         
        name='group1'       
        type='radio'            
        id={`inline-2`}         
        onChange={(i)=>productDispatch({        
            type:"sort_by_price",       
            playload:"highToLow"        
        })}         
        checked={ sort==="highToLow"?true:false }           
    />      
    </span>          
    <span>          
    <Form.Check         
        inline          
        label="Include Out Of Stock"        
        name='group1'   
        type='checkbox'     
        id={`inline-3`}
        onChange={(i)=>productDispatch({
            type:"sort_by_stock",
        })}
        checked={byStock}
    />
    </span>
    <span>
    <Form.Check         
        inline
        label="Fast Delivery Only"
        name='group1'
        type='checkbox'
        id={`inline-4`}       
        onChange={(i)=>productDispatch({
            type:"sort_by_delivery",
        })}
        checked={ byFastDelivery}
    />
    </span>
    <span>
        <label style={{paddingRight:10}}>Rating</label>
        <Rating  rating={byRating} onClick={(i)=>productDispatch({
            type:"sort_by_rating",
            playload:i+1,
        })} style={{cursor:"pointer"}}/>
    </span>
    <Button variant='light' onClick={(i)=>productDispatch({
            type:"clear",
        })}>Clear Filters</Button>        
    </div>
  )     
}

export default Filters
