 
 import Book from "./Book"


 export default function BookStore({books}){
    return (
        <div>
            <h4>Number of books : {books.length}</h4>
        {
            books.map(book => <Book book={book}></Book>)
        }
        </div>
        
        
    )
}