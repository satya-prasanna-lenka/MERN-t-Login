import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="inner" style={{ width: "50%" }}>
          <form action="">
            <h3 className="text-light">Contact Us</h3>
            <div
              className="container text-center mt-5 text-light"
              style={{ height: "60px" }}
            >
              <div className="row">
                <div className="col">satya prasanna lenka</div>
                <div className="col"> satya@gmail.com </div>
                <div className="col"> Work</div>
              </div>
            </div>
            <label class="form-group">
              <input
                style={{ backgroundColor: "transparent" }}
                type="text"
                class="form-control"
                required
              />
              <span>Your Name</span>
              <span class="border"></span>
            </label>
            <label class="form-group">
              <input
                style={{ backgroundColor: "transparent" }}
                type="text"
                class="form-control"
                required
              />
              <span for="">Your Mail</span>
              <span class="border"></span>
            </label>
            <label class="form-group">
              <input
                style={{ backgroundColor: "transparent" }}
                name=""
                id=""
                class="form-control"
                required
              />
              <span for="">Your Message</span>
              <span class="border"></span>
            </label>
            <button>
              Submit
              <i class="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
