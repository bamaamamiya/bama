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
            status: 'CURRENTLY READING',
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
    ];

    const filteredBooks = filter === 'ALL' ? BookList : BookList.filter(book => book.status === 'COMPLETE');


    return(
        <div className="bg-black text-white h-full justify-center items-center m-4 grid">
        <div className="text-center">
            <button
                onClick={() => setFilter(filter === 'ALL' ? 'COMPLETE' : 'ALL')}
                className="bg-primary p-2 rounded-md font-bold border-2"
            >
                {filter === 'ALL' ? 'Show Completed' : 'Show All'}
            </button>
        </div>
        <div className=" grid md:grid-cols-3 gap-4 justify-center h-screen w-max items-center ">
            {filteredBooks.map((book, index) => (
                <div key={index} className="m-2 text-center border-2 rounded-xl">
                    <div className="flex justify-center p-2 w-[200px] h-[200px]">
                        <img src={book.imgBook} alt={book.title} className="object-cover" />
                    </div>
                    <h2 className="text-lg font-bold">{book.title}</h2>
                    <h3 className="text-sm">{book.author}</h3>
                    <p className="font-extrabold text-xl">{book.status}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Book