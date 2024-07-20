const tecnologies = [{ name: "Javascript" }, { name: "CSS" }, { name: "HTML" }];

const ListTecnologies = () => {
  return (
    <ul>
      {tecnologies.map((value, index) => {
        return (
          <div>
            <li>{value.name}</li>
          </div>
        );
      })}
    </ul>
  );
};
export default ListTecnologies;
