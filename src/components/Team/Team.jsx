import Employee from "../Employee";

export const Team = ({ secondaryColor, primaryColor, employees, name }) => {
  return (
    employees.length > 0 && (
      <section className="team" style={{ backgroundColor: secondaryColor }}>
        <h3 style={{ borderColor: primaryColor }}>{name}</h3>
        <div className="employees">
          {employees.map((employee) => (
            <Employee
              backgroundColor={primaryColor}
              key={employee.name}
              name={employee.name}
              role={employee.role}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  );
};
