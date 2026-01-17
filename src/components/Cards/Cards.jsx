import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addToCart, decreamentItem, clearCart } from '../redux/cartSlice'
import { useSelector } from 'react-redux';

const Cards = ({ image, name, price, product }) => {

    const cartItems = useSelector(state => state.cart.items) || [];
    const addedItem = cartItems.find(item => product.id === item.id)
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }
    const HandleDecreamentItem = () => {
        dispatch(decreamentItem(product));
    }

    const handleClearCrt = () => {
        dispatch(clearCart());
    }
    return (
        <div className="rounded-xl p-2 w-60 shadow-md bg-zinc-100 p-5">

            {/* Card Icons */}
            <div className="flex justify-between mb-2 ">
                <FaHeart className="text-3xl text-zinc-300" />

                <button
                    onClick={HandleDecreamentItem}
                    className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-lg px-4 py-3 rounded-lg'>
                    {/* <FaPlus /> */} -
                </button>
                <span>{addedItem?.qty}</span>
                <button
                    onClick={handleAddToCart}
                    className='bg-gradient-to-b from-orange-400 to-orange-500 text-white text-lg px-4 py-3 rounded-lg'>
                    <FaPlus />
                </button>
            </div>




            {/* Card Image */}
            < div className="w-full h-40 flex justify-center items-center">
                <img src={image} alt="product" className="w-full h-full mx-auto object-contain" />
            </div>

            {/* Card Content */}
            <div className="text-center mt-3">
                {/* <img src={product.image} alt={product.name} className="h-40 mx-auto object-contain" /> */}
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-2xl font-bold mt-1 mb-3">${price.toFixed(2)}</p>
                <Button onClick={handleAddToCart} content="Add to Cart" />
                <Button onClick={handleClearCrt} content="Clear CART" />
            </div>

        </div >
    )
}

export default Cards;
