function TheHeader(props) {
  return (
    <>
      <br />
      <h1>
        <span>Hola mundo!! </span>

        <span>
          Mi nombre es: {props.name} {props.surname}
        </span>
      </h1>
      <br />
    </>
  );
}

export default TheHeader;
