import React, { Component } from 'react';

class SearchItem extends Component {
  static defaultProps = {
    categories: ['Dresser', 'Desk', 'Table']
  }

  handleSubmit(e){
    console.log('Submited');
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category =>{
      return <option key={category} value="category">{category}</option>

    });

    return (
      <div>
        <h3>Search Item</h3><br/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Item Code</label><br/><br/>
            <input type='Number()' ref="Item Code" />
          </div>
          <br/>
          <div>
            <label>Category</label><br/><br/>

            <select ref="category">
              {categoryOptions}
            </select>

            </div>
            <br/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchItem;
