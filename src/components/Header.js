import React, { Component } from "react";
import WindowAction from "./WindowAction";

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

        <div className="search">
          <input type="text" placeholder="جستجو" />
        </div>

        <div className="user">
          <div className="user__notifications">
            <i className="ion-android-notifications"></i>
          </div>

          <div className="user__inbox">
            <i className="ion-archive"></i>
          </div>

          <div className="user__info">
            <span className="user__info__img">
              <img
                src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p960x960/107877050_1228267104183293_8367084877643788209_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=jQ6YGCrvMvMAX-fLiR7&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=f146147c467e9df414b265c22322f52c&oe=5F5A5FA0"
                alt="Profile Picture"
                className="img-responsive"
              />
            </span>

            <span className="user__info__name">
              <span className="first">Azargul </span>

              <span className="last">Nazari</span>
            </span>
          </div>

          <div className="user__actions">
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <i className="ion-chevron-down"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenu1"
              >
                <li>
                  <a href="#">Private Session</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
