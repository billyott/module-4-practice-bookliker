import React from 'react'

import Book from '../Components/Book'


class BookList extends React.Component {

    renderBookTitles = () => {
        return this.props.books.map(book => <Book key={book.id} book={book} handleBookCardUpdate={this.props.handleBookCardUpdate}/>)
    }

    render() {
        return (
            <div>
                {this.renderBookTitles()}
            </div>
        )
    }

}

export default BookList