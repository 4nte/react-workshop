import React from 'react';

type ColorState = {
  favoriteColor: string
}

class FavoriteColor extends React.Component<{}, ColorState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      favoriteColor: "red"
    }
  }

  handleButtonClick = (color: string) => {
    this.setState({ favoriteColor: color });
  };

  render() {
    return (
      <>
        <button onClick={() => this.handleButtonClick("red")}>red</button>
        <button onClick={() => this.handleButtonClick("blue")}>blue</button>
        <button onClick={() => this.handleButtonClick("green")}>green</button>
        <button onClick={() => this.handleButtonClick("yellow")}>yellow</button>
        <h1>My favorite color is {this.state.favoriteColor}.</h1>
      </>
    )
  }
}

export default FavoriteColor;
