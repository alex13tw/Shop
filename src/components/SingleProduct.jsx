import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { Cart } from '../context/Context'

const SingleProduct = ({prod}) => {
    const {state:{cart},dispatch} = useContext(Cart)

  return (
    <div className='products'>
    <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>

            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
                <span>${prod.price.split(".")[0]}</span>
                {prod.fastDelivery?(
                    <div>Fast Delivery</div>
                ):(       
                    <div>4 Day Delivery</div>
                )}   
                <Rating rating={prod.ratings}/>   
                </Card.Subtitle>     
                {                    
                    cart.some(p=>p.id===prod.id)?(    
                        <Button onClick={()=>{  
                        dispatch({  
                            type:"remove",
                            playload:prod})
                    }} variant='danger'>Remove from cart</Button>  
        
                    ):(     
                    <Button onClick={()=>{
                        dispatch({      
                            type:"add",
                            playload:prod})                  
                    }} disabled={!prod.inStock}>
                {!prod.inStock?"Out of Stock":"Add to Cart"}    
                </Button>           
                    )   
                }
                          
        </Card.Body>

    </Card>
    </div>
  )
}

export default SingleProduct