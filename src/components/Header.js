import React, { Component } from "react";
import WindowAction from "./WindowAction";
import Search from "./Search"
import UserSection from "./UserSection";

export default class Header extends Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="header">

        <WindowAction />

        <div className="page-flows">
          <span className="flow">
            <i className="ion-chevron-left"></i>
          </span>

          <span className="flow">
            <i className="ion-chevron-right disabled"></i>
          </span>
        </div>

        {/*  Search on top bar */}
        <Search />

        {/*  User Section on top right  */}
        <UserSection />
      </section>
    );
  }
}
