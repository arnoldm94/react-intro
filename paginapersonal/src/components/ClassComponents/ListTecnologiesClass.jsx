import React from "react";
const tecnologies = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "CSS" },
  { id: 3, name: "HTML" },
];

class ListTecnologiesClass extends React.Component {
  render() {
    return (
      <ul>
        {tecnologies.map((value) => {
          return <li key={value.id}>{value.name}</li>;
        })}
      </ul>
    );
  }
}
export default ListTecnologiesClass;
