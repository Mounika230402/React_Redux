import React, { useEffect } from "react"
import Header from "./header";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import { Reducerstore } from "./store";
import { FetchProduts_success } from "./action";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { AddToCart } from "../../redux/cart/action";
// import './index.css';

const MainComponent = () => {
    const storeData=useSelector((Reducerstore)=>Reducerstore.products)
    const cartData=useSelector((Reducerstore)=>Reducerstore.cart)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(FetchProduts_success())
    },[])
    // console.log(storeData,cartData.products)
    const CartHandler=(each)=>{
      const filteredData=cartData.data.find(eachItem=>each.id===eachItem.id)
      
      if(!filteredData)
        dispatch(AddToCart(each))
      else
      alert('Already Exists')
    }
  return (
    <div>
      <Header count={cartData.data.length}/>
      <div className="Main">
      {
        storeData.products.map(each=>{
            return(
                <>
                <Card className='Card'>
       
       <Card.Img  src={each.images[0]} width={300} height={300} style={{padding:"1vw"}}  />
       <Card.Body>
         <Card.Title className="Title" style={{fontSize:"1.1vw"}}>{each.title}</Card.Title>
 
         <div className="Button">
         <Button variant="primary">More Details</Button>
         <Button variant="primary" onClick={()=>{CartHandler(each)}} style={{backgroundColor:"#febd69",border:"1px solid transparent"}}>Add to Cart</Button>
         </div>
       </Card.Body>
     </Card>

                
                </>
            )
        })
      }
      </div>
      <Footer/>
    </div>
  )
};

export default MainComponent;
