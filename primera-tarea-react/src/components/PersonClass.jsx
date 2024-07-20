import React from "react";
class PersonClass extends React.Component {
  render() {
    return (
      <>
        <br />
        <span>Hola mundo!!</span>
        <br />
        <span>
          mi nombre es: {this.props.name} {this.props.surname}
        </span>
        <br />
        <span> y tengo {this.props.age} años...</span>
        <br />
      </>
    );
  }
}
export default PersonClass;
