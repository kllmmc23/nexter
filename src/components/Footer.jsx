import React from "react";
import List from "./List";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="nav">
          <List text="Find your dream home" />
          <List text="Request proposal" />
          <List text="Download home planner" />
          <List text="Contact us" />
          <List text="Submit your property" />
          <List text="Come work with us!" />
          </ul>
          <p className="copyright">
              &copy; Copyright 2020 By M.E.
          </p>
    </footer>
  );
};

export default Footer;
