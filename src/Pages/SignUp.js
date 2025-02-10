import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    nrdsNumber: "",
    licenseNumber: "",
    brokerage: "", // Added field for Brokerage
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const validationErrors = {};
    if (!formData.firstName.trim()) validationErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) validationErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Invalid email address.";
    if (!formData.password) validationErrors.password = "Password is required.";
    else if (formData.password.length < 6) validationErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = "Passwords do not match.";
    if (!formData.licenseNumber.trim()) validationErrors.licenseNumber = "License Number is required.";
    if (!formData.brokerage.trim()) validationErrors.brokerage = "Brokerage is required."; // Validation for Brokerage

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted", formData);
      // Add logic to handle successful sign-up
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-5" style={{ width: "600px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder= "Required"
                type="text"
                id="firstName"
                name="firstName"
                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder= "Required"
                type="text"
                id="lastName"
                name="lastName"
                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                placeholder= "Required"
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <div className="col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="nrdsNumber">NRDS Number</label>
              <input
                type="text"
                id="nrdsNumber"
                name="nrdsNumber"
                className={`form-control ${errors.nrdsNumber ? "is-invalid" : ""}`}
                value={formData.nrdsNumber}
                onChange={handleChange}
              />
              {errors.nrdsNumber && <div className="invalid-feedback">{errors.nrdsNumber}</div>}
            </div>
            <div className="col">
              <label htmlFor="licenseNumber">License Number</label>
              <input
                placeholder= "Required"
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                className={`form-control ${errors.licenseNumber ? "is-invalid" : ""}`}
                value={formData.licenseNumber}
                onChange={handleChange}
              />
              {errors.licenseNumber && <div className="invalid-feedback">{errors.licenseNumber}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="brokerage">Brokerage</label>
            <input
              placeholder= "Required"
              type="text"
              id="brokerage"
              name="brokerage"
              className={`form-control ${errors.brokerage ? "is-invalid" : ""}`}
              value={formData.brokerage}
              onChange={handleChange}
            />
            {errors.brokerage && <div className="invalid-feedback">{errors.brokerage}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
