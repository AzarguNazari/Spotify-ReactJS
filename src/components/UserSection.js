import React, {Component} from 'react'

export default class UserSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                name: "Hazar Gul Nazari",
                image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/p960x960/107877050_1228267104183293_8367084877643788209_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=jQ6YGCrvMvMAX-fLiR7&_nc_ht=scontent-frt3-1.xx&_nc_tp=6&oh=f146147c467e9df414b265c22322f52c&oe=5F5A5FA0"
            }
        }
    }


    render() {
        return (
            <div className="user">

                <div className="user__actions">
                    <div className="dropdown">
                        <button
                            className="dropdown-toggle"
                            type="button"
                            id="settingMenu"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            <i className="ion-earth"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="settingMenu">
                            <li><a href="#">English</a></li>
                            <li><a href="#">فارسی</a></li>
                        </ul>
                    </div>
                </div>

                <div className="user__notifications">
                    <i className="ion-android-notifications"></i>
                </div>

                <div className="user__inbox">
                    <i className="ion-archive"></i>
                </div>

                <div className="user__info">
                    <span className="user__info__img">
                      <img src={this.state.profile.image} alt={this.state.profile.name} className="img-responsive" />
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
                            id="settingMenu"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            <i className="ion-chevron-down"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="settingMenu">
                            <li><a href="#">Private Session</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}