import React, { useState } from 'react';


const Book =() =>{

    const [filter, setFilter] = useState('ALL');

    const BookList = [
        {
            imgBook: "https://miro.medium.com/v2/resize:fit:1200/0*tjjVWoTGZzfhOLTO.jpg",
            title: "The 48 Laws of Power",
            status: 'CURRENTLY READING',
            author: 'Robert Greene'
        },
        {
            imgBook: "https://m.media-amazon.com/images/I/71fEmwof+BL._AC_UF1000,1000_QL80_.jpg",
            title: "The Laws of Human Nature",
            status: 'COMPLETE',
            author: 'Robert Greene'
        },
        {
            imgBook: "https://m.media-amazon.com/images/I/91HSzl9bxoL._SY342_.jpg",
            title: "Atomic Habits",
            status: 'COMPLETE',
            author: 'James Clear'
        },
        {
            imgBook: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/74e01257-2c38-4db6-bd38-20450fd93234/81BE7eeKzAL._SL1500_/w=828,quality=90,fit=scale-down",
            title: "Rich Dad Poor Dad",
            status: 'COMPLETE',
            author: 'Robert Kiyosaki and Sharon Lechter'
        },
        {
            imgBook: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5da19b6c-4d2b-4db7-8d8f-090c8ee0b1ae/71aG0m9XRcL._SL1500_/w=828,quality=90,fit=scale-down",
            title: "Psychology of Money",
            status: 'COMPLETE',
            author: 'Morgan Housel'
        },
        {
            imgBook: "https://m.media-amazon.com/images/I/41EWwZqn-LL.jpg",
            title: "Time Is Money",
            status: 'COMPLETE',
            author: 'Aiden Nolan'
        },
        {
            imgBook: "https://m.media-amazon.com/images/I/61+Cgl5Hu2L._AC_UF1000,1000_QL80_.jpg",
            title: "The Millionaire Master Plan",
            status: 'CURRENTLY READING',
            author: 'Roger J. Hamilton'
        },
    ];

    const filteredBooks = filter === 'ALL' ? BookList : BookList.filter(book => book.status === 'COMPLETE');


    return(
        <div className='h-max'>
            <div className='grid justify-center items-center'>
        <div className="text-center ">
            <button
                onClick={() => setFilter(filter === 'ALL' ? 'COMPLETE' : 'ALL')}
                className="bg-primary p-2 rounded-md font-bold border-2 border-r-4 border-b-4"
            >
                {filter === 'ALL' ? 'Show Completed' : 'Show All'}
            </button>
        </div>
        <div className='grid justify-center text-center gap-2 m-4 md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-2'>
            {filteredBooks.map((book, index) => (
                <div key={index}  className='grid justify-center border-2 p-2 rounded-lg'>
                        <img src={book.imgBook} alt={book.title} className=' h-[300px] w-full rounded-lg'/>
                    <h2 className="text-lg font-bold">{book.title}</h2>
                    <h3 className="text-sm">{book.author}</h3>
                    <p className="font-extrabold text-xl">{book.status}</p>
                    </div>
            ))}
        </div>
        </div>
    </div>
    )
}

export default Book