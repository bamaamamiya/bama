const Book =() =>{

    const BookList = [
        {imgBook : "https://www.bookmarked.id/cdn/shop/products/The48LawsofPowerNEW_1024x.jpg?v=1612547514" , 
        title : "The 48 Laws of Power" , status : 'CURRENTLY READING' , author : 'Robert Greene'},
        {imgBook : "https://koleksiperpus.jakarta.go.id/dispusip/uploaded_files/sampul_koleksi/original/Monograf/195205.jpg" , 
        title : "The Laws of Human Nature" , status : 'COMPLETE' , author : 'Robert Greene'},
        {imgBook : "https://m.media-amazon.com/images/I/91HSzl9bxoL._SY342_.jpg" , 
        title : "Atomic Habits" , status : 'CURRENTLY READING' , author : 'James Clear'},
        {imgBook : "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/74e01257-2c38-4db6-bd38-20450fd93234/81BE7eeKzAL._SL1500_/w=828,quality=90,fit=scale-down" , 
        title : "Rich Dad Poor Dad" , status : 'COMPLETE' , author : 'Robert Kiyosaki and Sharon Lechter'},
        {imgBook : "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5da19b6c-4d2b-4db7-8d8f-090c8ee0b1ae/71aG0m9XRcL._SL1500_/w=828,quality=90,fit=scale-down" , 
        title : "Psychology of Money" , status : 'COMPLETE' , author : 'Morgan Housel'},
    ]

    return(
        <div className="bg-black text-white h-screen justify-center items-center grid grid-cols-4 ">
            {BookList.map((book, index) => (
                <div key={index} className="m-4 text-center border-2 rounded-xl bg-white text-black">
                    <div className="flex justify-center p-2">
                    <img src={book.imgBook} alt={book.title} className="w-[200x] h-[200px]" />
                </div>
                    <h2 className="text-lg font-bold">{book.title}</h2>
                    <h3 className="text-sm">{book.author}</h3>
                    <p className="font-extrabold text-xl">{book.status}</p>
                </div>
            ))}
        </div>
    )
}

export default Book