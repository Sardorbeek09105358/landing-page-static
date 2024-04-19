import React, { useState } from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import watch from "../assets/watch.jpg"
import laptop from "../assets/laptop.jpg"
import keyboard from "../assets/keyboard.jpg"
import sungGlass from "../assets/glasses.jpeg"
import leatherWatch from "../assets/leatherWatch.jpg"
import mouse from "../assets/mouse.jpg"
import monitor from "../assets/monitor.jpg"
export default function Main() {
    let Products = [
        {
            img: sungGlass,
            title: 'sun glasses',
            description: 'lorem ipsum dolor',
            price: 40
        },
        {
            img: keyboard,
            title: 'black keyboard',
            description: 'lorem ipsum dolor',
            price: 70
        },
        {
            img: watch,
            title: 'apple watch',
            description: 'lorem ipsum dolor',
            price: 900
        },
        {
            img: mouse,
            title: 'black mouse',
            description: 'lorem ipsum dolor',
            price: 30
        },
        {
            img: laptop,
            title: 'accer laptop',
            description: 'lorem ipsum dolor',
            price: 999
        },
        {
            img: leatherWatch,
            title: 'leather Watch',
            description: 'lorem ipsum dolor',
            price: 880
        },
        {
            img: monitor,
            title: 'one pluse monitor',
            description: 'lorem ipsum dolor',
            price: 40
        },
        {
            img: sungGlass,
            title: 'sun glasses',
            description: 'lorem ipsum dolor',
            price: 40
        },
        {
            img: mouse,
            title: 'mouse',
            description: 'lorem ipsum dolor',
            price: 40
        },
        {
            img: leatherWatch,
            title: 'leatherWatch',
            description: 'lorem ipsum dolor',
            price: 40
        },
    ]
    const [filteredProducts, setFilteredProducts] = useState(Products)
    const searchHandler = (e) =>{
        const filteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        if(filteredArray.length != 0){
            setFilteredProducts(filteredArray)
        }
    }
    return (
        <div className='w-full relative'>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-white'>
                    <h1 className='font-bold text-3xl'>bkra shop</h1>
                    <div className="search flex justify-between items-center px-5 py-5 bg-gray-100 rounded">
                        <input type="text" placeholder='Search to product' className='bg-transparent outline-0'  onChange={searchHandler}/>
                        <button onClick={() => searchHandler()}><CiSearch /></button>
                    </div>
                </div>
                <div className="categories w-full flex space-x-8 px-2 py-10">
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>watches</p>
                    </div>
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>laptop</p>
                    </div>
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>monitors</p>
                    </div>
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>mouses</p>
                    </div>
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>monitors</p>
                    </div>
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>watches</p>
                    </div>
                    <div className=' hover:bg-black hover:text-white cursor-pointer bg-white px-5 py-2 rounded-full drop-shadow-xl'>
                        <p className='capitalize'>keyboards</p>
                    </div>
                </div>
                <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
                    {
                        filteredProducts && filteredProducts.map((product, idx) => {
                            return (
                                <div className="product h-[300px] bg-white drop-shadow-2xl p-2 border" key={idx}>
                                    <img src={product.img} alt="" className='w-full h-[60%] oject-cover p-2' />
                                    <div className='m-2 bg-gray-100 p-2'>
                                        <h1 className='text-xl font-semibold'>{product.title}</h1>
                                        <p className='text-sm'>{product.description}</p>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-xl font-bold'>${product.price}.00</p>
                                            <CiShoppingCart />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

