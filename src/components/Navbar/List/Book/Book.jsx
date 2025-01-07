import React, { useState } from 'react';
import Footer from '../../../Footer/Footer';

const Book = () => {
    const [filter, setFilter] = useState('ALL');
    const [category, setCategory] = useState('ALL');

    const BookList = [
        {
            imgBook: "/images/book/48.jpg",
            title: "The 48 Laws of Power",
            status: 'CURRENTLY READING',
            category: 'Self-Development',
            author: 'Robert Greene'
        },
        {
            imgBook: "/images/book/nature.jpg",
            title: "The Laws of Human Nature",
            status: 'COMPLETE',
            category: 'Self-Development',
            author: 'Robert Greene'
        },
        {
            imgBook: "/images/book/atomic.jpg",
            title: "Atomic Habits",
            status: 'COMPLETE',
            category: 'Self-Development',
            author: 'James Clear'
        },
        {
            imgBook: "/images/book/richdad.jpg",
            title: "Rich Dad Poor Dad",
            status: 'COMPLETE',
            category: 'Finance',
            author: 'Robert Kiyosaki'
        },
        {
            imgBook: "/images/book/morgan.jpg",
            title: "Psychology of Money",
            status: 'COMPLETE',
            category: 'Finance',
            author: 'Morgan Housel'
        },
        {
            imgBook: "/images/book/timeismoney.jpg",
            title: "Time Is Money",
            status: 'COMPLETE',
            category: 'Education',
            author: 'Aiden Nolan'
        },
        {
            imgBook: "/images/book/plan.jpg",
            title: "The Millionaire Master Plan",
            status: 'CURRENTLY READING',
            category: 'Business',
            author: 'Roger J. Hamilton'
        },
        {
            imgBook: "/images/book/learn.jpg",
            title: "The Science of Self-Learning",
            status: 'COMPLETE',
            category: 'Education',
            author: 'Peter Hollins'
        },
        {
            imgBook: "/images/book/meditation.jpg",
            title: "Meditations",
            status: 'COMPLETE',
            category: 'Education',
            author: 'Marcus Aurelius'
        },
        
        {
            imgBook: "/images/book/offer.jpg",
            title: "$100M Offers",
            status: 'COMPLETE',
            category: 'Business',
            author: 'Alex Hormozi'
        },
        {
            imgBook: "/images/book/fastline.jpg",
            title: "The Millionaire Fastlane",
            status: 'COMPLETE',
            category: 'Business',
            author: 'M. J. DeMarco'
        },
        {
            imgBook: "/images/book/dotcom.jpg",
            title: "Dotcom Secrets",
            status: 'COMPLETE',
            category: 'Business',
            author: 'Russell Brunson'
        },
        {
            imgBook: "/images/book/lordofmoney.jpg",
            title: "The Lords of Easy Money",
            status: 'COMPLETE',
            category: 'Education',
            author: 'Christopher Leonard'
        },
        {
            imgBook: "/images/book/selfdirected.jpg",
            title: "The Art of Self-Directed Learning",
            status: 'COMPLETE',
            category: 'Education',
            author: 'Blake Boles'
        },
        {
            imgBook: "/images/book/jekyllisland.jpg",
            title: "The creature from Jekyll Island",
            status: 'CURRENTLY READING',
            category: 'Education',
            author: 'G. Edward Griffin'
        },
        {
            imgBook: "/images/book/goggins.jpg",
            title: "Can't Hurt Me",
            status: 'CURRENTLY READING',
            category: 'Education',
            author: 'David Goggins'
        },
        // {
        //     imgBook: "/images/book/weekend.jpg",
        //     title: "Million Dollar Weekend",
        //     status: 'CURRENTLY READING',
        //     category: 'Business',
        //     author: 'Noah Kagan'
        // },
        {
            imgBook: "/images/book/seduction.jpg",
            title: "The Art of Seduction",
            status: 'CURRENTLY READING',
            category: 'Education',
            author: 'Robert Greene'
        },
        {
            imgBook: "/images/book/mastery.jpg",
            title: "Mastery",
            status: 'CURRENTLY READING',
            category: 'Education',
            author: 'Robert Greene'
        },

    ];

    const filteredBooks = BookList.filter(book => {
        if (filter === 'ALL' && category === 'ALL') {
            return true;
        } else if (filter !== 'ALL' && category !== 'ALL') {
            return book.status === filter && book.category === category;
        } else if (filter !== 'ALL') {
            return book.status === filter;
        } else {
            return book.category === category;
        }
    });

    const allBooks = filteredBooks.length
    const completedBooks = BookList.filter(book => book.status === 'COMPLETE').length;
    const currentlyBooks = BookList.filter(book => book.status === 'CURRENTLY READING').length;

    return (
        <div className='h-max'>
            <div className='grid justify-center items-center'>
                {/* Dropdown Filters */}
                <div className="text-center space-y-2 space-x-2 ">
                    {/* <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className=" p-2 rounded-md font-bold border-2 border-r-4 border-b-4 bg-black text-white"
                    >
                        <option value="ALL">All Status</option>
                        <option value="COMPLETE">Completed</option>
                        <option value="CURRENTLY READING">Currently Reading</option>
                    </select> */}

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className=" p-2 rounded-md font-bold border-2 border-r-4 border-b-4 bg-black text-white "
                    >
                        <option value="ALL">All Categories</option>
                        <option value="Self-Development">Self-Development</option>
                        <option value="Finance">Finance</option>
                        <option value="Business">Business</option>
                        <option value="Education">Education</option>
                    </select>

                    <div className='flex justify-center items-center gap-4'>
                        <p className='text-xl text-center'>Total Books: {allBooks} </p>
                        {/* <p className='text-xl text-center'>Completed Books: {completedBooks} </p>
                        <p className='text-xl text-center'>Currently Reading: {currentlyBooks} </p> */}
                    </div>
                </div>
                {/* Dropdown Filters */}
                <div className='grid justify-center text-center gap-2 m-4 md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2'>
                    {filteredBooks.map((book, index) => (
                        <div key={index} className='grid justify-center border-2 p-2 rounded-lg'>
                            <div className='flex justify-center items-center'>
                            <img src={book.imgBook} alt={book.title} className='sm:h-96 w-full rounded-lg' />
                            </div>

                            <div className='grid justify-center items-center capitalize'>
                            <h2 className="text-base sm:text-lg font-bold ">{book.title}</h2>
                            <h3 className="text-sm">{book.author}</h3>
                            {/* <p className="font-extrabold text-xl">{book.status}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Book;
