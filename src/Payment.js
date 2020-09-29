import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link} from 'react-router-dom';

function Payment() {
    const[{cart, user}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div  className='payment__container'>
                <h1>
                    Checkout(
                        <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>800 N LBJ DR</p>
                        <p>San Marcos, Tx</p>
                    </div>
                </div>
                {/* Payment section - ReviewItemss */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {cart.map(item => (
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            /> 
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
