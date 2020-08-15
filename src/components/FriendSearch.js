import React, {Component} from "react"

export default class FriendSearch extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="content__right">
                <div className="social">
                    <div className="friends">
                        <a href="#" className="friend">
                            <i className="ion-android-person"></i> Sayeed Karim
                        </a>

                        <a href="#" className="friend">
                            <i className="ion-android-person"></i> Ahmad Rishad
                        </a>

                        <a href="#" className="friend">
                            <i className="ion-android-person"></i> Murtaza Sakha
                        </a>

                        <a href="#" className="friend">
                            <i className="ion-android-person"></i> Karim Ahmad
                        </a>

                        <a href="#" className="friend">
                            <i className="ion-android-person"></i> Rasouly Ahmad
                        </a>

                        <a href="#" className="friend">
                            <i className="ion-android-person"></i> Jamshid Nazari
                        </a>
                    </div>

                    <button className="button-light">جستجو دوست</button>
                </div>
            </div>
        );
    }

}