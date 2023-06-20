import React, { Component } from "react";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="py-5">
            <div className="container px-lg-5">
              <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div className="m-4 m-lg-5">
                  <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                  <p className="fs-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique alias voluptas ipsum deserunt! Minus vel fugit
                    dolores harum, praesentium consectetur.
                  </p>
                  <a className="btn btn-primary btn-lg" href="#!">
                    Call to action!
                  </a>
                </div>
              </div>
            </div>
          </header>

          <Item />

        
        </div>
      </div>
    );
  }
}
