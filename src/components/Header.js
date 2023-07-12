import React from 'react'
import { Badge, Container, Navbar } from 'react-bootstrap'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom'
import '../Styles/style.css'
import { useSelector } from 'react-redux';
const Header = () => {

    const getDataFromStore = useSelector((state) => state.changeInCart.cartData)
    return (
        <>
            <Navbar bg="dark" variant="dark"   >
                <Container>
                    <Navbar.Brand >
                        <Link to="/" className='link'>
                            <b> E-Kart </b></Link> </Navbar.Brand>
                    <ul className='navbar-header'>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/item">Items</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/cart">Cart<sup>{getDataFromStore.length}</sup></Link></li>
                    </ul>


                </Container>
            </Navbar>
        </>
    )
}

export default Header
