import React, { useEffect, useState } from 'react'
import '../Styles/style.css'
import {Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import {Button, FormControl, Navbar } from 'react-bootstrap'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../Actions/index'
const MenuPage = () => {

  const dispatch = useDispatch();
  const getDataFromStore = useSelector((state) => state.changeInCart.cartData)
  console.log(getDataFromStore);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => { setLoading(false) })

  const dataList = [
    {id:1, brand: 'NOISE', price: 1499, type: 'watch', image: 'images/w1.jpeg', color: 'black', quantity: 1 },
    {id:2, brand: 'HP', price: 599, type: 'pendrive', image: 'images/pd1.jpeg', color: 'silver', quantity: 1 },
    {id:3, brand: 'BOAT', price: 1299, type: 'earphone', image: 'images/ep1.jpeg', color: 'black', quantity: 1 },
    {id:4, brand: 'HP', price: 549, type: 'mouse', image: 'images/m1.jpeg', color: 'black', quantity: 1 },
    {id:5, brand: 'HP', price: 399, type: 'pendrive', image: 'images/pd2.jpeg', color: 'silver', quantity: 1 },
    {id:6, brand: 'BOAT', price: 1350, type: 'watch', image: "images/w12.jpeg", color: 'grey', quantity: 1 },
    {id:7, brand: 'HP', price: 999, type: 'pendrive', image: 'images/pd3.jpeg', color: 'silver', quantity: 1 },
    {id:8, brand: 'DELL', price: 399, type: 'mouse', image: 'images/m2.jpeg', color: 'black', quantity: 1 },
    {id:9, brand: 'HP', price: 799, type: 'keyboard', image: 'images/k1.jpeg', color: 'black', quantity: 1 },
    {id:10, brand: 'SANDISK', price: 499, type: 'pendrive', image: 'images/pd4.jpeg', color: 'grey', quantity: 1 },
    {id:11, brand: 'DELL', price: 599, type: 'mouse', image: 'images/m3.jpeg', color: 'white', quantity: 1 },
    {id:12, brand: 'NOISE', price: 1799, type: 'watch', image: "images/w3.jpeg", color: 'black', quantity: 1 },
    {id:13, brand: 'MIVI', price: 999, type: 'earphone', image: 'images/ep3.jpeg', color: 'black', quantity: 1 },
    {id:14, brand: 'SANDISK', price: 899, type: 'pendrive', image: 'images/pd5.jpeg', color: 'grey', quantity: 1 },
    {id:15, brand: 'DELL', price: 699, type: 'keyboard', image: 'images/k2.jpeg', color: 'black', quantity: 1 },
    {id:16, brand: 'HP', price: 299, type: 'mouse', image: 'images/m4.jpeg', color: 'black', quantity: 1 },
    {id:17, brand: 'NOISE', price: 1399, type: 'watch', image: "images/w4.jpeg", color: 'black', quantity: 1 },
    {id:18, brand: 'REALME', price: 1499, type: 'earphone', image: 'images/ep4.jpeg', color: 'green', quantity: 1 },
    {id:19, brand: 'QUANTUM', price: 359, type: 'mouse', image: 'images/m5.jpeg', color: 'black', quantity: 1 },
    {id:20, brand: 'SANDISK', price: 599, type: 'pendrive', image: 'images/pd6.jpeg', color: 'blue', quantity: 1 },
    {id:21, brand: 'DELL', price: 1499, type: 'keyboard', image: 'images/k3.jpeg', color: 'blue', quantity: 1 },
    {id:22, brand: 'BOAT', price: 1999, type: 'watch', image: "images/w5.jpeg", color: 'blue', quantity: 1 },
    {id:23, brand: 'MIVI', price: 1199, type: 'earphone', image: 'images/ep5.jpeg', color: 'black', quantity: 1 },
    {id:24, brand: 'HP', price: 249, type: 'mouse', image: 'images/m6.jpeg', color: 'black', quantity: 1 },
    {id:25, brand: 'SANDISK', price: 799, type: 'pendrive', image: 'images/pd7.jpeg', color: 'grey', quantity: 1 },
    {id:26, brand: 'HRX', price: 2499, type: 'watch', image: "images/w6.jpeg", color: 'black', quantity: 1 },
    {id:27, brand: 'HP', price: 1199, type: 'keyboard', image: 'images/k4.jpeg', color: 'black', quantity: 1 },
    {id:28, brand: 'HP', price: 459, type: 'mouse', image: 'images/m7.jpeg', color: 'grey', quantity: 1 },
    {id:29, brand: 'BOULT', price: 899, type: 'earphone', image: 'images/ep6.jpeg', color: 'grey', quantity: 1 },
    {id:30, brand: 'SANDISK', price: 499, type: 'pendrive', image: 'images/pd8.jpeg', color: 'silver', quantity: 1 },
    {id:31, brand: 'NOISE', price: 1899, type: 'watch', image: "images/w7.jpeg", color: 'red', quantity: 1 },
    {id:32, brand: 'APPLE', price: 15999, type: 'earphone', image: 'images/ep7.jpeg', color: 'white', quantity: 1 },
    {id:33, brand: 'LENOVO', price: 1359, type: 'keyboard', image: 'images/k5.jpeg', color: 'black', quantity: 1 },
    {id:34, brand: 'FASTRACK', price: 2399, type: 'watch', image: 'images/w8.jpeg', color: 'white', quantity: 1 },
    {id:35, brand: 'LENOVO', price: 549, type: 'mouse', image: 'images/m8.jpeg', color: 'white', quantity: 1 },
    {id:36, brand: 'BOAT', price: 899, type: 'earphone', image: 'images/ep8.jpeg', color: 'black', quantity: 1 },
    {id:37, brand: 'FASTRACK', price: 1699, type: 'watch', image: "images/w9.jpeg", color: 'black', quantity: 1 },
    {id:38, brand: 'HP', price: 499, type: 'pendrive', image: 'images/pd12.jpeg', color: 'black', quantity: 1 },
    {id:39, brand: 'DELL', price: 1399, type: 'keyboard', image: 'images/k6.jpeg', color: 'white', quantity: 1 },
    {id:40, brand: 'REALME', price: 1499, type: 'earphone', image: 'images/ep9.jpeg', color: 'blue', quantity: 1 },
    {id:41, brand: 'FASTRACK', price: 2199, type: 'watch', image: "images/w10.jpeg", color: 'pink', quantity: 1 },
    {id:42, brand: 'HP', price: 399, type: 'mouse', image: 'images/m9.jpeg', color: 'black', quantity: 1 },
    {id:43, brand: 'BOAT', price: 799, type: 'earphone', image: 'images/ep10.jpeg', color: 'black', quantity: 1 },
    {id:44, brand: 'BOAT', price: 1499, type: 'watch', image: "images/w11.jpeg", color: 'blue', quantity: 1 },
    {id:45, brand: 'ACER', price: 1259, type: 'keyboard', image: 'images/k7.jpeg', color: 'offWhite', quantity: 1 },
    {id:46, brand: 'ONEPLUS', price: 1499, type: 'earphone', image: 'images/ep11.jpeg', color: 'black', quantity: 1 },
    {id:47, brand: 'BOAT', price: 1350, type: 'watch', image: "images/w12.jpeg", color: 'grey', quantity: 1 },
    {id:48, brand: 'ONEPLUS', price: 1499, type: 'earphone', image: 'images/ep12.jpeg', color: 'grey', quantity: 1 },
    {id:49, brand: 'BOAT', price: 2399, type: 'watch', image: "images/w13.jpeg", color: 'blue', quantity: 1 },
    {id:50, brand: 'SANDISK', price: 699, type: 'pendrive', image: 'images/pd9.jpeg', color: 'black', quantity: 1 },
    {id:51, brand: 'DELL', price: 999, type: 'keyboard', image: 'images/k8.jpeg', color: 'black', quantity: 1 },
    {id:52, brand: 'ONEPLUS', price: 1699, type: 'earphone', image: 'images/ep13.jpeg', color: 'grey', quantity: 1 },
    {id:53, brand: 'BOAT', price: 1399, type: 'watch', image: "images/w14.jpeg", color: 'black', quantity: 1 },
    {id:54, brand: 'ONEPLUS', price: 1699, type: 'earphone', image: 'images/ep14.jpeg', color: 'black', quantity: 1 },
    {id:55, brand: 'BOAT', price: 2399, type: 'watch', image: 'images/w15.jpeg', color: 'red', quantity: 1 },
    {id:56, brand: 'REALME', price: 1499, type: 'earphone', image: 'images/ep15.jpeg', color: 'black', quantity: 1 },
    {id:57, brand: 'HP', price: 1199, type: 'keyboard', image: 'images/k9.jpeg', color: 'black', quantity: 1 },
    {id:58, brand: 'HAMMER', price: 999, type: 'watch', image: "images/w16.jpeg", color: 'blue', quantity: 1 },
    {id:59, brand: 'BOAT', price: 1499, type: 'watch', image: "images/w17.jpeg", color: 'grey', quantity: 1 },
    {id:60, brand: 'FASTRACK', price: 2499, type: 'watch', image: "images/w18.jpeg", color: 'green', quantity: 1 },
    {id:61, brand: 'HP', price: 799, type: 'pendrive', image: 'images/pd10.jpeg', color: 'black', quantity: 1 },
    {id:62, brand: 'FASTRACK', price: 2699, type: 'watch', image: "images/w19.jpeg", color: 'red', quantity: 1 },
    {id:63, brand: 'DELL', price: 1199, type: 'keyboard', image: 'images/k10.jpeg', color: 'white', quantity: 1 },
    {id:64, brand: 'HP', price: 799, type: 'pendrive', image: 'images/pd11.jpeg', color: 'silver', quantity: 1 },
    {id:65, brand: 'FASTRACK', price: 2499, type: 'watch', image: "images/w20.jpeg", color: 'black', quantity: 1 },
  ]

  function addToCartHandler(item) {
    alert('item added to cart')
    // console.log(item);
    dispatch(AddToCart(item))
  }

  function getInputFromUser(val) {
    // console.log(val.target.value)
    setInput(val.target.value.toLowerCase().trim())
  }
  return (
    <div className='whole-menu'>
      <marquee className="blink" direction="right" scrollamount="3" behavior="alternate" bgcolor="yellow">Watch,Earphone,Keyboard,Mouse,Pendrive in Stock</marquee>

      {loading === true ? <h3>Loading...</h3> : null}
      <Navbar.Text className='search' style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <FormControl style={{ width: '40%' }} placeholder='search product' className='m-auto' onChange={getInputFromUser}>
        </FormControl>
        <Button style={{ width: '100px', margin: '5px' }} className="btn btn-dark" onClick={() => {
          setSearch(input)
          setLoading(!loading)
        }}>Search</Button>
      </Navbar.Text>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          dataList.map((menu, i) => (
            menu.type.includes(search) || menu.type.includes(search) || menu.brand.toLowerCase().trim().includes(search) || search === 'all' ? <Card sx={{ maxWidth: '300px', maxHeight: '350px', m: 2, borderRadius: '10px' }} key={i}>
              <CardActionArea className='all-img'>
                <img src={menu.image} alt={menu.brand} height={'180px'} width={'170px'} />
                <CardContent>
                  <Typography varient='h5' sx={{ ml: '2px', textAlign: 'left' }}>
                    <p className='datafield'><b>{menu.brand} </b> &nbsp;&nbsp;<b>₹</b>{menu.price} </p>
                  </Typography>
                  <Typography varient='h5' sx={{ ml: '2px', textAlign: 'left', fontSize: '12px', "& span": { ml: '3px' }, mt: '1px' }}>
                    <p>  {menu.type} <span><b>color: &nbsp;&nbsp;</b>{menu.color}</span>  </p>
                  </Typography>

                  <Typography sx={{ ml: '2px', textAlign: 'left', mt: '1px' }}>
                    <Button className="btn btn-dark" style={{ padding: '6px', fontSize: '8px', marginTop: '1px' }} onClick={() => addToCartHandler(menu)}>ADD TO CART</Button>
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card> : null
          ))
        }
      </Box>

    </ div>
  )
}

export default MenuPage
