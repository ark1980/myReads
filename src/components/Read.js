import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import Book from './Book'


class Read extends Component {
  render() {
    return(
      <div className="BookShelf">
				<div className="BookshelfTitleBar">
					<div className="BookshelfTitle">
            <FontAwesomeIcon icon={faBook} size="2x"/>
						<h3>Read</h3>
					</div>
				</div>
				<div className="BookList">
				{this.props.books.map(book => (
					book.shelf === "read" &&
					<Book 
						book={book} 
						key={book.id}
						shelf={book.shelf}
						updateShelfStatus={this.props.updateShelfStatus}
					/>
				))}
				</div>
			</div>
    )
  }
}

export default Read;