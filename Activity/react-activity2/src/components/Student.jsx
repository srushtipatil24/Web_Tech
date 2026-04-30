function Student(props) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "10px",
      margin: "10px"
    }}>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default Student;