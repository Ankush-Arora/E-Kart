import React, { useEffect, useState } from 'react'
import '../Styles/style.css'
import { Button } from 'react-bootstrap'
import order from '../img/shop.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { EmptyCart,IncrQuantity,DecrQuantity } from '../Actions'
const Cart = () => {



  const getDataFromStore=useSelector((state)=>state.changeInCart.cartData)
  const dispatch=useDispatch();
  const [update,setUpdate]=useState(true)
  const [copyCart, setCopyCart] = useState([])
  const [thankyou, setThankyou] = useState(false)
  const [coupon, setCoupon] = useState("")
  const [apply, setApply] = useState('NO')

  function giveDiscount() {
    coupon === 'ANKUSH30' ? setApply('YES') : alert('Please enter valid coupon')
  }

  function increase(item)
  {
    // console.warn('Increased method called')
    setCopyCart(getDataFromStore)
    dispatch(IncrQuantity(item))
    setUpdate(!update)
  }

  function decrease(item)
  {
    // console.warn('Increased method called')
    setCopyCart(getDataFromStore)
    dispatch(DecrQuantity(item))
    setUpdate(!update)
  }

  function getInput(input) {
    // console.warn('In getInput method',input.target.value)
    setCoupon(input.target.value)
  }

  useEffect(() => {
    setCopyCart(getDataFromStore)
  },[update])

  function placedOrder() {
    alert('Your Order has been placed!')
    dispatch(EmptyCart())
    setCopyCart(null)
    {
      setThankyou(true)
      setCopyCart([])
      setApply('NO')
    }
  }

  return (
    <div className='cart-component' >
      <marquee className="blink" direction="right" scrollamount="5" behavior="alternate" bgcolor="yellow">Apply coupon ANKUSH30 to get 30%off</marquee>
     { 
     getDataFromStore.length=== 0 ?  <div>
     <img src={'images/empty-cart.png'} className="card-img-top h-50 p-2 " alt="notfound" />
   </div>:
     <div>
      {/* {thankyou === false ? <h2><b>Items Added</b></h2> : null} */}
      {
        thankyou === false ?
          <table className='cart-table' >
            <thead>
              <tr ><td>ITEMS</td><td>BRAND</td>
                <td></td><td>QUANTITY</td><td></td><td>PRICE</td></tr>
            </thead>
            <tbody>
              {
                copyCart.map((item, idx) => {
                  return <tr>
                    <td><img src={item.image} alt='image not found'  width='30px' height="5px" /></td>
                    <td>{item.brand}</td>
                    <td><Button onClick={()=>increase(item)} >+</Button></td><td>{item.quantity} </td>
                    <td><Button onClick={()=>decrease(item)} >-</Button></td><td>₹{item.price * item.quantity}</td><td></td>
                  </tr>
                })
              }

              <tr><td colSpan={6}>
                {apply === 'NO' ? <div>
                  <input type='text' className='apply-coupon' placeholder='enter coupon' onChange={getInput} />
                  <Button className='apply-button' onClick={giveDiscount}>Apply</Button>
                </div> : <h6> Coupon Applied! Got 30% off</h6>}
              </td></tr>
              <tr>
                {
                  apply === 'YES' ? <td colSpan={6}><b>Total: &nbsp;&nbsp;&nbsp;₹&nbsp;
                    {
                      (0.7 * copyCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)).toFixed(0)
                    }
                  </b>&nbsp;&nbsp;&nbsp;<Button onClick={placedOrder}>Order Now</Button>
                  </td> : <td colSpan={6}><b>Total: &nbsp;&nbsp;&nbsp;₹&nbsp;
                    {
                      copyCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                    }
                  </b>&nbsp;&nbsp;&nbsp;<Button onClick={placedOrder}>Order Now</Button>
                  </td>
                }
              </tr>
            </tbody>
          </table> : <img className='image-cart' src={order} alt='image not found' ></img>
      }
      </div> }
    </div>
  )
}

export default Cart
