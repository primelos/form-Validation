import React from 'react'
import useForm from '../useForm'
import validate from '../validateInfo'
import './form.css'

const FormSignUp = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors} = useForm(submitForm, validate)

    return (
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              values={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              values={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              values={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              name="password2"
              className="form-input"
              placeholder="Enter your password2"
              values={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button type='submit' className="form-input-btn">Sign up</button>
          <span className="form-input-login">
            Already have a account? Login <a href="#">here</a>
          </span>
        </form>
      </div>
    );
}

export default FormSignUp
