import React, { useState } from 'react';
import Footer from '../Footer/Footer';


const Book = () => {

    const [filter, setFilter] = useState('ALL');

    const BookList = [
        {
            imgBook: "/images/book/48.jpg",
            title: "The 48 Laws of Power",
            status: 'CURRENTLY READING',
            author: 'Robert Greene'
        },
        {
            imgBook: "/images/book/nature.jpg",
            title: "The Laws of Human Nature",
            status: 'COMPLETE',
            author: 'Robert Greene'
        },
        {
            imgBook: "/images/book/atomic.jpg",
            title: "Atomic Habits",
            status: 'COMPLETE',
            author: 'James Clear'
        },
        {
            imgBook: "/images/book/richdad.jpg",
            title: "Rich Dad Poor Dad",
            status: 'COMPLETE',
            author: 'Robert Kiyosaki and Sharon Lechter'
        },
        {
            imgBook: "/images/book/morgan.jpg",
            title: "Psychology of Money",
            status: 'COMPLETE',
            author: 'Morgan Housel'
        },
        {
            imgBook: "/images/book/timeismoney.jpg",
            title: "Time Is Money",
            status: 'COMPLETE',
            author: 'Aiden Nolan'
        },
        {
            imgBook: "/images/book/plan.jpg",
            title: "The Millionaire Master Plan",
            status: 'CURRENTLY READING',
            author: 'Roger J. Hamilton'
        },
        {
            imgBook: "/images/book/learn.jpg",
            title: "The Science of Self-Learning",
            status: 'COMPLETE',
            author: 'Peter Hollins'
        },
        {
            imgBook: "/images/book/offer.jpg",
            title: "$100M Offers",
            status: 'COMPLETE',
            author: 'Alex Hormozi'
        },
        {
            imgBook: "/images/book/fastline.jpg",
            title: "The Millionaire Fastlane",
            status: 'CURRENTLY READING',
            author: 'M. J. DeMarco'
        },
    ];

    const filteredBooks = filter === 'ALL' ? BookList : BookList.filter(book => book.status === 'COMPLETE');
    const complatedBooks = BookList.filter(book => book.status === 'COMPLETE').length
    const currentlyBooks = BookList.filter(book => book.status === 'CURRENTLY READING').length


    return (
        <div className='h-max'>
            <div className='grid justify-center items-center'>
                <div className="text-center space-y-2 space-x-2">
                    <button
                        onClick={() => setFilter(filter === 'ALL' ? 'COMPLETE' : 'ALL')}
                        className="bg-primary p-2 rounded-md font-bold border-2 border-r-4 border-b-4"
                    >
                        {filter === 'ALL' ? 'Show Completed' : 'Show All'}
                    </button>

                    <div className='flex justify-center items-center gap-2'>
                        <p className='text-xl'>Completed Books : {complatedBooks} </p>
                        <p className='text-xl'>Currently Reading : {currentlyBooks} </p>
                    </div>
                </div>
                <div className='grid justify-center text-center gap-2 m-4 md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2'>
                    {filteredBooks.map((book, index) => (
                        <div key={index} className='grid justify-center border-2 p-2 rounded-lg'>
                            <img src={book.imgBook} alt={book.title} className='md:h-[320px] w-full rounded-lg' />
                            <h2 className="text-lg font-bold">{book.title}</h2>
                            <h3 className="text-sm">{book.author}</h3>
                            <p className="font-extrabold text-xl">{book.status}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Book