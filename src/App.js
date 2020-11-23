import React from "react";
import {
  Menu
} from "semantic-ui-react";

import BookList from './Containers/BookList'
import BookCard from './Components/BookCard'

class App extends React.Component {

  state = {
    books: [],
    currentBook: ''
  }

  componentDidMount() {
      fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(books => this.setState(prevState => {
          return {
            books: books
          }
      }))
  }

  handleBookCardUpdate = (book) => {
    this.setState({currentBook: book})
  }

  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>
            <Menu.Item as={"a"}>
              <BookList books={this.state.books} handleBookCardUpdate={this.handleBookCardUpdate}/>
            </Menu.Item>
          </Menu>
          {this.state.currentBook ? <BookCard currentBook={this.state.currentBook}/>: null}
        </main>
      </div>
    );
  }

}

export default App;

// onClick={e => console.log("book clicked!")}
