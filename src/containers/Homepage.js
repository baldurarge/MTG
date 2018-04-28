import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  render() {
    const showCards = this.props.cards.map(card => {
      if (card.image_uris) {
        return (
          <div className="around-image" key={card.id}>
            {/* <h4>{card.name}</h4> */}
            <img src={card.image_uris.small} alt="" />
          </div>
        );
      } else {
        return (
          <div className="around-image" key={card.id}>
            {/* <h4>{card.name}</h4> */}
            <img src="https://i.stack.imgur.com/787gj.png" alt="" />
          </div>
        );
      }
    });

    return <div className="homePage">{showCards}</div>;
  }
}

const mapStateToProps = state => ({
  cards: state.cards.items
});

export default connect(mapStateToProps)(HomePage);
