import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    mobile: "",
    work: "",
    password: "",
    cpassword: "",
  });
  return (
    <>
      <main class="form-signin w-100 m-auto mt-5">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="name"
              value={inputData.name}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
            <label for="floatingInput">Name</label>
          </div>

          <div class="form-floating">
            <input
              style={{ border: "2px solid black" }}
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="tel"
              class="form-control"
              style={{ border: "2px solid black" }}
              id="floatingInput"
              placeholder="name@example.com"
              name="mobile"
              value={inputData.mobile}
              onChange={(e) =>
                setInputData({ ...inputData, mobile: e.target.value })
              }
            />
            <label for="floatingInput">Mobile</label>
          </div>
          <div class="form-floating">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              style={{ border: "2px solid black" }}
              placeholder="name@example.com"
              name="work"
              value={inputData.work}
              onChange={(e) =>
                setInputData({ ...inputData, work: e.target.value })
              }
            />
            <label for="floatingInput">Your Profession</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              style={{ border: "2px solid black" }}
              name="password"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
            <label for="floatingInput">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="cpassword"
              style={{ border: "2px solid black" }}
              value={inputData.cpassword}
              onChange={(e) =>
                setInputData({ ...inputData, cpassword: e.target.value })
              }
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary">Sign in</button>
        </form>
        <NavLink to="/login" className="text-center text-dark mt-4">
          <p style={{ transform: "translateY(30px)" }}>
            Already Registered? Click here...
          </p>
        </NavLink>
      </main>
    </>
  );
};

export default Signup;
