import React, { useState, useEffect } from 'react'

import Product from './Product'

function BookList() {
    const [books, setBooks] = useState(() => initialData())

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
                            return <Product {...product} />
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
            name: '레이블라우스1',
            price: '57,600',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 2,
            name: '레이블라우스2',
            price: '600',
            image: 'http://placekitten.com/200/300',
            discunt: 10,
        },
        {
            id: 3,
            name: '레이블라우스3',
            price: '600',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 4,
            name: '레이블라우스4',
            price: '650',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 5,
            name: '레이블라우스5',
            price: '850',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 6,
            name: '레이블라우스6',
            price: '950',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 7,
            name: '레이블라우스7',
            price: '950',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 8,
            name: '레이블라우스8',
            price: '950',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 9,
            name: '레이블라우스9',
            price: '950',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
        {
            id: 10,
            name: '레이블라우스10',
            price: '950',
            image: 'http://placekitten.com/200/300',
            discunt: 15,
        },
    ]
}
