import React from 'react'
import img from '../img/down.png'
import watch from '../img/watch.png'
import pendrive from '../img/pendrive.jpg'
import mousekey from '../img/mouse&key.jpg'
import earphone from '../img/earphones.png'

const Home = () => {
  return (
    // <div>
    <div className='home-img'>
      <marquee className="blink" direction="right" scrollamount="5" behavior="alternate" bgcolor="yellow">SALE IS LIVE!</marquee>
      <table className='home-table' >
        <tr className='text-gadgets'> <td>Smart Watches</td><td>Pendrives</td></tr>
        <tr>
          <td> <img src={watch} alt='logo image'></img> </td>
          <td> <img src={pendrive} alt='logo image'></img></td>
        </tr>
        <tr className='text-gadgets'> <td>Mouse & keyboard</td><td>Airpods</td></tr>
        <tr>
          <td> <img src={mousekey} alt='logo image'></img></td>
          <td> <img src={earphone} alt='logo image'></img></td>
        </tr>
      </table>
      <img src={img} alt='logo image'></img>
    </div>
    // {/* </div> */}
  )
}

export default Home
