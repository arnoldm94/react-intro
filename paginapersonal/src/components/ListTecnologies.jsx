const tecnologies = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "CSS" },
  { id: 3, name: "HTML" },
];

const ListTecnologies = () => {
  return (
    <ul>
      {tecnologies.map((value) => {
        return <li key={value.id}>{value.name}</li>;
      })}
    </ul>
  );
};
export default ListTecnologies;
