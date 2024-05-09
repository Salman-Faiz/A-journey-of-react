import './Book.css';
export default function Book({book}){
    const {BookName,price} =book;
    return (
        <div className='bookCss'>
            <h4>Book :{BookName}</h4>
            <h4>price:{price}</h4>
        </div>
    )
}