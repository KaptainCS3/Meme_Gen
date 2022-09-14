import React from "react";
const Form = () => {
  const styles = {
    label: {
      color: "#fff",
      fontSize: "2em",
    },
    input: {
      paddingRight: 10+'px',
    },
  };
  return (
    <div>
      <form style={styles.label}>
        <label htmlFor="fName" style={styles.input}>
          First Name
        </label>
        <input type="text" placeholder="Enter first name" id="fName" />
        <br />
        <br />
        <label htmlFor="lName" style={styles.input}>
          Last Name
        </label>
        <input type="text" placeholder="Enter last name" id="lName" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
