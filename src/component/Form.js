import React, { useState } from "react";
const Form = () => {
  const [formData, seFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    movieList: "",
  });
  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    seFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event){
          event.preventDefault()
          console.log(formData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <fieldset>
          <legend className="lgd">Current employment status</legend>
          <input
            type="radio"
            id="Uempl"
            name="employment"
            value="Unemployed"
            onClick={handleChange}
          />
          <label htmlFor="Uempl">Unemployed</label>
          <input
            type="radio"
            id="pTime"
            name="employment"
            value="Part Time"
            onClick={handleChange}
          />
          <label htmlFor="pTime">Part Time</label>
          <input
            type="radio"
            id="fTime"
            name="employment"
            value="Full Time"
            onClick={handleChange}
          />
          <label htmlFor="fTime">Full Time</label>
        </fieldset>

        <label>Select a Favorite movie</label>
        <br />
        <br />
        <select
          name="movieList"
          value={formData.movieList}
          onChange={handleChange}
        >
          <option value="">--Choose a movie--</option>
          <option value="King Kong The Return">King kong the return</option>
          <option value="Maze Runner">Maze runner</option>
          <option value="Tom Rider">Tom Rider</option>
          <option value="Men In Black">Men In Black</option>
          <option value="Ride Along">Ride Along</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
