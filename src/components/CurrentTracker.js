import React, { Component } from "react";

export default class CurrentTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="current-track">
        <div className="current-track__actions">
          <a className="ion-ios-skipbackward"></a>

          <a className="ion-ios-play play"></a>

          <a className="ion-ios-skipforward"></a>
        </div>

        <div className="current-track__progress">
          <div className="current-track__progress__start">0:01</div>

          <div className="current-track__progress__bar">
            <div id="song-progress"></div>
          </div>

          <div className="current-track__progress__finish">3:07</div>
        </div>

        <div className="current-track__options">
          <a href="#" className="lyrics">
            Lyrics
          </a>

          <span className="controls">
            <a href="#" className="control">
              <i className="ion-navicon"></i>
            </a>

            <a href="#" className="control">
              <i className="ion-shuffle"></i>
            </a>

            <a href="#" className="control">
              <i className="fa fa-refresh"></i>
            </a>

            <a href="#" className="control devices">
              <i className="ion-iphone"></i>
              <span>Devices Available</span>
            </a>

            <a href="#" className="control volume">
              <i className="ion-volume-high"></i>

              <div id="song-volume"></div>
            </a>
          </span>
        </div>
      </section>
    );
  }
}
