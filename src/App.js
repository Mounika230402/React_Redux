
import './App.css';
import {  useDispatch,useSelector } from 'react-redux';
import { Reducerstore } from './redux/store';
import { buyCandiesAction, SellCandiesAction } from './redux/candies/action';
import logo from './logo.svg';
import axios from 'axios';
import { FetchProduts_error, FetchProduts_loading, FetchProduts_success } from './redux/products/action';
import { useEffect } from 'react';
import { AddToCart, RemoveFromCart } from './redux/cart/action';

function App() {
  
  const candiesData=useSelector((Reducerstore)=>Reducerstore.candies)
  const productsData=useSelector((Reducerstore)=>Reducerstore.products)
  const CartData=useSelector((Reducerstore)=>Reducerstore.cart)
  console.log(candiesData,productsData)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(FetchProduts_success())
  },[])
  const IncrementHandler=(each)=>{
    dispatch(buyCandiesAction(each))
  }
  const DecrementHandler=()=>{
    dispatch(SellCandiesAction())
  }
  const addCartHandler=(each)=>{
    const findEach=CartData.products.find((eachItem)=>each.id===eachItem.id)
    if(!findEach)
    dispatch(AddToCart(each))
    else
    alert("Already Exists")
  }
  // const FetchData=async()=>{
  //   try{
  //   dispatch(FetchProduts_loading())
  //   const response= await axios.get("https://fakestoreapi.com/products")
  //   if(response.status===200)
  //   dispatch(FetchProduts_success(response.data))
  //   }
  //   catch(err){
  //     dispatch(FetchProduts_error())
  //   }
  // }
  const RemoveCartHandler=(id)=>{
    dispatch(RemoveFromCart(id))
  }
  
  return (
    // <>
   
    // </>
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         {/* <h3>{candiesData.candies}</h3>
         <button onClick={IncrementHandler}>Increment</button>
         <button onClick={DecrementHandler}>Decrement</button> */}
         {
          productsData.products.length >0 ? <>{
            productsData.products.map(each=>{
              return(<>
              <h3>{each.title}</h3>

         <button onClick={()=>{IncrementHandler(each)}}>+</button>
         <p>{candiesData.candies}</p>
         <button onClick={DecrementHandler}>-</button>
         <br></br>
              <button onClick={()=>addCartHandler(each)}>ADD to Cart</button>
              <button onClick={()=>RemoveCartHandler(each.id)}>Remove from Cart</button></>)
            })
          }
          </> :<h3>Bug</h3>
         }
       </header>
     </div>
  );
}

export default App;
