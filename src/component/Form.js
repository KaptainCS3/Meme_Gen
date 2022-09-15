import React, { useState } from "react";
const Form = () => {
  const [formData, seFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
  });
  function handleChange(event) {
    const {name, type, value, checked} = event.target;
    seFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(formData);
  return (
    <div>
      <form>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          placeholder="Enter first name"
          id="fName"
          name="firstName"
          value={FormData.firstName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          placeholder="Enter last name"
          id="lName"
          name="lastName"
          value={FormData.lastName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email address"
          id="email"
          name="email"
          value={FormData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <textarea
          placeholder="Comments"
          id="cmt"
          name="comment"
          value={FormData.comment}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="checkbox"
          id="checkbox"
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="checkbox" className="check">
          Are you Friendly?
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
