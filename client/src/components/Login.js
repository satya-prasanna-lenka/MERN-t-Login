import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
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
              type="email"
              style={{ border: "2px solid black" }}
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
              type="password"
              class="form-control"
              id="floatingInput"
              style={{ border: "2px solid black" }}
              placeholder="name@example.com"
              name="password"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
            <label for="floatingInput">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary">Login in</button>
        </form>
        <NavLink to="/signup" className="text-center text-dark mt-4 ml-3">
          <p style={{ transform: "translateY(30px)" }}>
            Not registered yet? Click here...
          </p>
        </NavLink>
      </main>
    </>
  );
};

export default Login;
