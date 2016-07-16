import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import { fetchNotes } from '../actions/notes.js';


class Categories extends Component {

  renderCategories() {
    let orgId = 1;
    console.log("inside render CAT ")
    return this.props.categories.map(category => {
      return (
        <a
          key={category.id}
          onClick={() => this.props.fetchNotes(orgId, category.id)}> {category.title}
        </a>
      )
    });
  }

  render() {
    return (
      <div id="categories">
        <h2>Categories</h2>
        {this.renderCategories()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("this cat", state.categories)
  return { categories: state.categories.categories};
}


export default connect(mapStateToProps, { fetchCategories, fetchNotes })(Categories);
