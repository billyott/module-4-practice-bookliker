import React from 'react'


class Book extends React.Component {
    
    localHandleBookCardUpdate = () => {
        this.props.handleBookCardUpdate(this.props.book)
    }    

    render() {
        return(
        <h2 onClick={this.localHandleBookCardUpdate}>{this.props.book.title}</h2>
        )
    }
}

export default Book