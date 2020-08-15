import React, { Component } from "react";
import LeftSideOption from "./LeftSideOption";
import ArtistPage from "./ArtistPage";
import FriendSearch from "./FriendSearch";

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {
        leftMenuOptions: [{
           link: "#",
           name: "صحفه اصلی",
           id: "main",
           subcategories: [
             {name: "جستجو",
               icon: "ion-ios-browsers",
               link: "#"
             },
             {name: "فعالعیت",
               icon: "ion-person-stalker",
               link: "#"
             },
             {name: "رادیو",
               icon: "ion-radio-waves",
               link: "#"
             }
           ]
        },
          {
            link: "#",
            name: "آهنگ شما",
            id: "yourMusic",
            subcategories: [
              {name: "آهنگ ها",
                icon: "ion-headphone",
                link: "#"
              },
              {name: "البوم",
                icon: "ion-ios-musical-notes",
                link: "#"
              },
              {name: "هنرمند ها",
                icon: "ion-person",
                link: "#"
              },
              {name: "ذخیر فایل",
                icon: "ion-document",
                link: "#"
              }
            ]
          },
          {
            link: "#",
            name: "لیست آهنگ ها",
            id: "playlists",
            subcategories: [
              {name: "آهنگ شاد",
                icon: "ion-ios-musical-notes",
                link: "#"
              },
              {name: "اتن افغانی",
                icon: "ion-ios-musical-notes",
                link: "#"
              },
              {name: "آهنگ آرامی بخش",
                icon: "ion-ios-musical-notes",
                link: "#"
              },
              {name: "آهنگ های فرهاد دریا",
                icon: "ion-ios-musical-notes",
                link: "#"
              }
            ]
          }]
    }
  }

  render() {
    return (
      <section className="content">
        <div className="content__left">
          <section className="navigation">
            <LeftSideOption leftSideContent={this.state.leftMenuOptions} />
          </section>

          <section className="playlist">
            <a href="#">
              <i className="ion-ios-plus-outline"></i> لیست آهنگ ها
            </a>
          </section>

          <section className="playing">
            <div className="playing__art">
              <img
                src="https://tutitv.wm3wrbk2-liquidwebsites.com/wp-content/uploads/2015/12/news-oo-ghaitaa.jpg"
                alt="Album Art"
              />
            </div>

            <div className="playing__song">
              <a className="playing__song__name">یک کلید خانه</a>

              <a className="playing__song__artist">فرهاد دریا</a>
            </div>

            <div className="playing__add">
              <i className="ion-checkmark"></i>
            </div>
          </section>
        </div>

        <ArtistPage />

        <FriendSearch />
      </section>
    );
  }
}
