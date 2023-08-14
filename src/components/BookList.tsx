import React, { useState, useEffect } from 'react'

import Product from './Product'

function BookList() {
    const [books, setBooks] = useState(() => initialData())

    async function fetchBook() {
        await fetch('http://localhost:3333/book/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setBooks(data)
            })
    }

    useEffect(() => {
        fetchBook()
    }, [])

    return (
        <div>
            <div className="container max-w-[50%] mx-auto font-nato">
                <div className="header">
                    <h3 className="bg-white py-4 text-xl font-bold text-center">
                        Books
                    </h3>
                </div>
                <div className="book-list">
                    <div className="grid gap-x-0.5 md:grid-cols-2">
                        {books.map((product) => {
                            return (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product?.title}
                                    discountRate={product?.discountRate}
                                    price={product?.price}
                                    coverImage={product?.coverImage}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookList

function initialData() {
    return [
        {
            id: 1,
            title: '레이블라우스1',
            price: '57,600',
            coverImage: 'http://placekitten.com/200/300',
            discountRate: '15',
        },
    ]
}
