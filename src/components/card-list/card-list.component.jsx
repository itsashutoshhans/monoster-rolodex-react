import { Component } from "react";

class CardList extends Component {
  render() {
    console.log('render from cardlist');
    const { monsters } = this.props;
    // react renders on mount and re renders happens on two conditions  - when setState is called and when props change
    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
