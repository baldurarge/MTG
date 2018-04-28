import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions/searchActions';

class CardSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.fetchCards(this.state.searchText);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="searchInputDiv">
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="searchText"
            id="searchText"
            onChange={this.onChange}
            value={this.state.searchText}
            placeholder="Search For A Card"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards.items
});

export default connect(mapStateToProps, { fetchCards })(CardSearch);
