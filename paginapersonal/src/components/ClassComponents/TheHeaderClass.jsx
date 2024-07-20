import React from "react";
class TheHeader extends React.Component {
  render() {
    return (
      <>
        <br />
        <h1>
          <span>Hola mundo!! </span>

          <span>
            Mi nombre es: {this.props.name} {this.props.surname}
          </span>
        </h1>
        <br />
      </>
    );
  }
}

export default TheHeader;
