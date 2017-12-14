import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={ () => this.props.selectBook(book) }
                    key={book.title}
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    // Will be returned and show up as props inside BookList
    return {
        books: state.books
    };
}

// Returns props on the Booklist container
function mapDispatchToProps(dispatch){
    // selectBook is passed to all reducers when called
    return bindActionCreators({ selectBook: selectBook }, dispatch );
}

// Promotes Booklist from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
