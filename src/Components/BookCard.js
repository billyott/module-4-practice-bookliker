import React from 'react'
import {
    Container,
    Header,
    Button,
    List,
    Image
  } from "semantic-ui-react";

class BookCard extends React.Component {

    state = {
        currentBook: ''
    }

    componentDidMount() {
        this.setState({currentBook: this.props.currentBook})
    }

    renderCurrentLikers = () => {
        return this.state.currentBook.users.map(user => <List.Item key={user.id} icon="user" content={user.username} />)
    }

    handleBookLike = () => {
        if (!this.state.currentBook.users.find(user => user.id === 1)) {
            fetch(`http://localhost:3000/books/${this.state.currentBook.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({users: [...this.state.currentBook.users, {id: 1, username: "pouros"}]})
            })
            .then(resp => resp.json())
            .then(book => this.setState({currentBook: book}))
        }
    }
    
    render() {
        return (
            <Container text>
                <Header>{this.props.currentBook.title}</Header>
                <Image src={this.props.currentBook.img_url} size="small"/>
                <p>{this.props.currentBook.description}</p>
                <Button onClick={this.handleBookLike}
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{
                        basic: true,
                        color: "red",
                        pointing: "left",
                        content: "2,048"
                    }}
                />
                <Header>Liked by</Header>
                <List>
                    {this.state.currentBook ? this.renderCurrentLikers() : null}
                </List>
          </Container>
        )
    }

}

export default BookCard