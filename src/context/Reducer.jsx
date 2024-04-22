export const cartReducer = (state,action)=>{
    switch(action.type){   
        case "add":
            return {...state, cart:[...state.cart,{...action.playload, qty:1}]};
        case "remove":
            return {
                ...state,
                cart: state.cart.filter((c)=>c.id !== action.playload.id),
            }; 
        case "change":
            return{
                ...state,cart:state.cart.filter(c=>c.id===action.playload.id?c.qty=action.playload.qty:c.qty)
            }    
        default :
          return state;     
        
    }

}

export const productReducer=(state,action)=>{

    switch (action.type) {
        case "sort_by_price":
            return {
                ...state, sort:action.playload
            };
        
            case "sort_by_stock":
                return { 
                    ...state, byStock: !state.byStock
                };  
            case "sort_by_delivery":
            return {
                        ...state,  byFastDelivery: !state. byFastDelivery
            };  
            case "sort_by_rating":
            return {
                         ...state, byRating: action.playload
            }; 
            case "sort_by_search":
            return {
                        ...state, searchQuery: action.playload
            };   
            case "clear":
            return {
                                byStock:false,
                                byFastDelivery:false,
                                byRating:0,
                                searchQuery:"",  
                }                                                            
            
            break;
    
        default:
            return state;     
        }
    
}