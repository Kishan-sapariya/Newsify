import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-teriary">
          <div className="container-fluid bg-dark">
            <Link className="navbar-brand text-light" to="/general">
              Newsify
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link  text-light"
                    aria-current="page"
                    to="/general"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/business">
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment">
                    entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/general">
                    general
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/health">
                  health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/technology">
                    technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
