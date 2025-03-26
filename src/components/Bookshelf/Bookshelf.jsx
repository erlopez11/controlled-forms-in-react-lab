import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({
            title: '',
            author: '',
        });
    }


    return (
        <>
        <div className="formDiv">
            <h3>Add a Book</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    value={newBook.title}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    value={newBook.author}
                    onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>

        <div className="bookCardsDiv">
            {books.map(book => (
                <div className="bookCard">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default Bookshelf