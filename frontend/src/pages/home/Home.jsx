import React, { useState } from 'react'
import InvoiceForm from '../../components/InvoiceForm'

const Home = () => {

    const [products, setProducts] = useState([])

    const productsHandler = (data) => {
        setProducts(data)
    }

    return (
        <section className="content-center bg-blue-100 pt-12">
            <div className="md:w-3/5 mx-auto bg-blue-200 p-4 rounded-xl">
                <InvoiceForm productsHandler={productsHandler} />

                <table className='table mt-2'>
                    <thead className='text-zinc-600'>
                        <tr>
                            <th></th>
                            <th>Items Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Edit</th>
                        </tr>
                    </thead>

                    <tbody className='font-bold text-zinc-600'>
                        {
                            products.map((elem, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className='text-zinc-800'>{elem.title}</td>
                                    <td>{elem.price}</td>
                                    <td>{elem.quantity}</td>
                                    <td className='text-zinc-800'>{elem.total}</td>
                                    <td>Edit</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </section>
    )
}

export default Home