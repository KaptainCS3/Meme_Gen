import React, { useState } from "react";

const FormPractice = () => {
  const [formFilled, setFormFilled] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsLetter: false,
  });
  function handleChange(event) {
    const { type, name, checked, value } = event.target;
    setFormFilled((prevFilled) => {
      return {
        ...prevFilled,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (formFilled.password === formFilled.confirmPassword) {
      console.log("Successfully sign up");
    } else {
      alert("Password do not match");
      return;
    }

    if (formFilled.newsLetter) {
      console.log("Thanks for signing up for our newsletter!");
    } else {
      return;
    }
  }
  console.log(formFilled);
  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formFilled.email}
          id="email"
          onChange={handleChange}
        />

        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          name="password"
          value={formFilled.password}
          placeholder="Enter password"
          id="pwd"
          onChange={handleChange}
        />
        <label htmlFor="Cpwd">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formFilled.confirmPassword}
          placeholder="Confirm password"
          id="Cpwd"
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            checked={formFilled.newsLetter}
            id="newsLetter"
            onChange={handleChange}
            name="newsLetter"
          />
          <label htmlFor="newsLetter">I agree to join this news letter</label>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default FormPractice;
