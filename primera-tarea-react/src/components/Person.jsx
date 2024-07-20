import "../App.css";

function Person(props) {
  return (
    <>
      <br />
      <span>Hola mundo!!</span>
      <br />
      <span>
        mi nombre es: {props.name} {props.surname}
      </span>
      <br />
      <span> y tengo {props.age} años...</span>
      <br />
    </>
  );
}

export default Person;
