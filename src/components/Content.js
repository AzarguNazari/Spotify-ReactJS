import React, { Component } from "react";
import LeftSideOption from "./LeftSideOption";

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
        }]
    }
  }

  render() {
    return (
      <section className="content">
        <div className="content__left">
          <section className="navigation">

            {
              this.state.leftMenuOptions.forEach(menu => {
                 return <LeftSideOption options={menu.subcategories} link={menu.link} name={menu.name} id={menu.id}/>
              })
            }


            <div className="navigation__list">
              <div
                className="navigation__list__header"
                role="button"
                data-toggle="collapse"
                href="#yourMusic"
                aria-expanded="true"
                aria-controls="yourMusic"
              >
                آهنگ شما
              </div>

              <div className="collapse in" id="yourMusic">
                <a href="#" className="navigation__list__item">
                  <i className="ion-headphone"></i>
                  <span>آهنگ ها</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>البوم</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-person"></i>
                  <span>هنرمند ها</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-document"></i>
                  <span>ذخیر فایل</span>
                </a>
              </div>
            </div>

            <div className="navigation__list">
              <div
                className="navigation__list__header"
                role="button"
                data-toggle="collapse"
                href="#playlists"
                aria-expanded="true"
                aria-controls="playlists"
              >
                لیست آهنگ ها
              </div>

              <div className="collapse in" id="playlists">
                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ شاد</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>اتن افغانی</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ آرامی بخش</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ های فرهاد دریا</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ های سابق</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ میر مفتون</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ های قطغنی</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ های میهنی</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ ها پاپ</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>بهترین آهنگ ها</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ های رقص</span>
                </a>

                <a href="#" className="navigation__list__item">
                  <i className="ion-ios-musical-notes"></i>
                  <span>آهنگ ها دلنشین</span>
                </a>
              </div>
            </div>
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

        <div className="content__middle">
          <div className="artist is-verified">
            <div className="artist__header">
              <div className="artist__info">
                <div className="profile__img">
                  <img
                    src="https://aryanasayeed.com/wp-content/uploads/2017/04/product_005.jpg"
                    alt="Aryana Sayeed"
                  />
                </div>

                <div className="artist__info__meta">
                  <div className="artist__info__type">Artest</div>

                  <div className="artist__info__name">Aryana Sayyed</div>

                  <div className="artist__info__actions">
                    <button className="button-dark">
                      <i className="ion-ios-play"></i>
                      Play
                    </button>

                    <button className="button-light">Follow</button>

                    <button className="button-light more">
                      <i className="ion-ios-more"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="artist__listeners">
                <div className="artist__listeners__count">15,662,810</div>

                <div className="artist__listeners__label">
                  Monthly Listeners
                </div>
              </div>

              <div className="artist__navigation">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a
                      href="#artist-overview"
                      aria-controls="artist-overview"
                      role="tab"
                      data-toggle="tab"
                    >
                      Overview
                    </a>
                  </li>

                  <li role="presentation">
                    <a
                      href="#related-artists"
                      aria-controls="related-artists"
                      role="tab"
                      data-toggle="tab"
                    >
                      Related Artists
                    </a>
                  </li>

                  <li role="presentation">
                    <a
                      href="#artist-about"
                      aria-controls="artist-about"
                      role="tab"
                      data-toggle="tab"
                    >
                      About
                    </a>
                  </li>
                </ul>

                <div className="artist__navigation__friends">
                  <a href="#">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="Seeta Qasimi"
                    />
                  </a>

                  <a href="#">
                    <img
                      src="https://wikieon.com/wp-content/uploads/2020/05/Seeta-Qasemi-4.jpg"
                      alt="Seeta Qasimi"
                    />
                  </a>

                  <a href="#">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="artist__content">
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="artist-overview"
                >
                  <div className="overview">
                    <div className="overview__artist">
                      <div className="section-title">Latest Release</div>

                      <div className="latest-release">
                        <div className="latest-release__art">
                          <img
                            src="https://f4.bcbits.com/img/a3066423135_10.jpg"
                            alt="When It's Dark Out"
                          />
                        </div>

                        <div className="latest-release__song">
                          <div className="latest-release__song__title">
                            بچه افغان
                          </div>

                          <div className="latest-release__song__date">
                            <span className="day">4 </span>

                            <span className="month">December </span>

                            <span className="year">2015</span>
                          </div>
                        </div>
                      </div>

                      <div className="section-title">Popular</div>

                      <div className="tracks">
                        <div className="track">
                          <div className="track__art">
                            <img
                              src="https://m.media-amazon.com/images/I/71C-j2wlcbL._SS500_.jpg"
                              alt="When It's Dark Out"
                            />
                          </div>

                          <div className="track__number">1</div>

                          <div className="track__added">
                            <i className="ion-checkmark-round added"></i>
                          </div>

                          <div className="track__title">
                            افغان پسرک قد بالا داری
                          </div>

                          <div className="track__explicit">
                            <span className="label">Explicit</span>
                          </div>

                          <div className="track__plays">1,544,165</div>
                        </div>

                        <div className="track">
                          <div className="track__art">
                            <img
                              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQEBIQEBUVFRUQEBUVEBUPEBAVFRUWFhUXFRUYHSggGRolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHR0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAACAQUGBwj/xABAEAACAQMDAQUEBgkCBgMAAAABAgMABBEFEiExBhNBUWEiMnGRBxSBobHBFSMzQlJTYpLRorIWJEOC4fBjctL/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJREBAQACAgICAgIDAQAAAAAAAAECEQMSITEEQRMiMlFCccFh/9oADAMBAAIRAxEAPwDihWcVZVoix17jwQwtXWOjKlFWOgACOriKmAlXVKQ2XEdEWOmBHVxHSPYCx1cJRxHVxHSPZfu6nd013dTu6QK7KxspwRVnuqRktlQpTvc1nuKWza8pWO7p8w1UxUAiY6wY6eMdVMVMiJSqlaeMVUMdAJlKoUp1o6oUpkTKVQrTbJQ2SmCjLQ2Wm2WhMtMF8VKLtqUHsZVoirUVaMq1aGFSiKtZC0RVpUMKtEC1ZVoirUhUJRAlXVaKq0gEEogSiqlEVKVMAR1YR0wI6usdSZYRURYKbjhophPQcHxPlUZZ6m1443KtZNJHGDvdRgZIzlv7RzWvi1qFzwGA8yMVtW0sF+APU+PP50z+hlx7o+VcOfyrLqPQw+JLN0gm1unj08QfgRUaGjQaf3bbR7p5x4K3mPjTTQ+FdHDz93NzcHStWYqqY6feKhmOuhzEjHQzHTzR0NkqiJNHQylOslDZKYJMlCZKdZKEyUyJMtBZaddaA60wW21KNtqUARFoiisLRkWqJlFogWrItFVamhVEoqJVlSiqtIKqtEVasq0RVpWhhVoipV1WiKtSaipRo4qsiU1DHU2qkYSLApi3g8TREjzxThjwp+Brg5+R6Px+Lbkb2+2thZY4mJyCy94T6AZGB68/CmtBvrh37uYRSIc4lQ4weuCP/FU1rsLDekSd5JEwGPZ5U/EH8qe0Ts0lgmO9eTkHkYAxxn8+vjXnd5p6/Tzon2i1SC1YLIW3HlQq7icU1G6yosqcqyhhkYPwI8DWr7YWt2WMlkqSnpIM5ccfu8j/ANJq/Ye4mlt3W5R0kjlZcOMNtIVgfhyflXR8fLTk+Vx7n+jkkVLtHW0ePilXSvWxy3Hi5TVIslDZKcZKGy1bMmyUJkpxloTLVAk60Jlpx0oDrVETdaC60460BlpkW21KNsqUAIUaOqqtFRaoGIqYQUvHTMdTSXC1dRUFXUVJrKKIoqqijIKRrKtFVawgoyrUnGUWnIVoMa00grPO6jXCbo9uvNHvRiNvgPxFYt1/CramcRMT0wP9wryea+3sfHnmAWT0prvcSbUmZuCDtVymcEEZI9RVoZK57W9KXeXeCWdWycrLIGU/AEVxY3b1scZvy2+jwxp3vduzhm3YZixU4889OnSmbTkyHP8ACPln/Ncz2ft+7ZmjEscZGNsjb2z14J5x8fOuh0f3XPm5+4CtuK/s5vlYzrRtnWlJEp9ec0CZa9jhv6x89zTWRBloTLRLm5RPeZR8SAeftqYz0+P2Vr+TH+2f4s/eqVZaEy026elAcVeOUy9VGWNx9wq4oDrTbil3FaRBVxQWWmmFBZaogNtSibalALoKMtCWirVkMlHSgJR0qaDC0RRQkoyioqhFFGQUOMUdBSC6ijIKoooyCoULGKYj60KMUo+pJGTuYDnx4rn58tRvwY7rfQ/4pTtPzaT4OD3ZIPkRzWil7YW6EjeOgPyPP3VoO03b1Gt5II+XkUqpz7ucjNeZl+109fjnWbqtn2kljGHQPjxBxW2h7dKBho3Xz4BrgrLW0YASjafMcqfzFU1fWEjGI8SMemPdX4n8qw/Fd607vzY2b27HU+2tuFLbvs6H5V0PZK5MlpHKwwZN0mPIMx2/6cV8/wAoaVxuPLEDPgMnFfQulMiQxxoRhUVR8AAB+FbTjmDl5OW5z/xsIByfhVJRWLaTLEelXlFejwfxePz/AMnNanp6TbopAPZKyRt0O3IJGfLIIx5Unqvay2gfuVDTsCVbbgICOntdCPhW81W0Mi+z7w93w3A+8p9CPvxSmjW9rjaYlVgcMCoDKfUVz82Fxy/29D4vLjnj59z6/wCktAM07mR84PQHGxR5BR+Zra30O1vvrdRoi424ArW6qvtZ8OlV8bLrlqs/mTvjbr01TigPTLigOK9R45ZxQnFHcUFzVQg8VipmpTBVaKtBWjLVkNHR0oCUdKmgdKOlASjpU0xo6YSgJR0qKYq0ZTjk8eJ9KEtch9IXaERR/Vozln/bEH9mnivxP4fGoyuptphjcrptLrt3aR+73kxyR7KbV49WI4+FaLVe21tcKVe0l6HDLKoYH5VxLkeFUArmzvbxXbhxzHzCt5cszEhQv+o/aT1qkMR6n404Y80eNfCsfxT6dHcNBkVRxk48B95puO3yQADkkKAPEk4A59TW37Rdk5bARmZkYSAldrZ5XG4HIH8Q5qLjqzH7qpfG3MGPHtDqDkfEcijjVbrdkSNnj4DHpRSoFY24q/xT7T3s9Ol0btxdQDDiKX1ZSp+YP5Vv7f6SUP7a3dfWNw4+TY/GvO6wRW2M16Y5YzL29f0rtPbXbd3E534yFZSjEeOPA4pi/sFl55Rx7rrww9PUehrxzSbkRXUD52hZULHOMLuAYk+WCa9tJzyCCOoI5BrSayllc2cvFlLjWk/TbwYicbnyR/TxjB8+cit2JxPCGHXHI8iOtcH9It88EkDIF9pZASc9VK48f6q0sXby7Vdidwo9IiT8yxriyw6Zaj0MeT8mEt+3oTil5TivJb/UJJGaVmO4nccEqM+gHAr0nRLgy20UjHLFBuPmw4J+Yrv4ubvdPN5uD8c3sw7UF6K4oLmumOZSpWM1KYLLRkoS0VKukMlMJS6UdKmgdKMlBSjJU0zCUdK0WodobeAHdIrsP3EIZ8/Pj7a5HWO1c1wNifqU8QrHc3/2bjj0FZZZSNsOLLJ0nartV3OYLcgydHfqIvQDoW/CvOpNxJLEsSSSSckk9cnxqwOKoZgfSsMrv27cMJjPC0Puj5VnFS3bjFXxU6Wi0UGqYqy0aAqnypjUdQlnIaaR5CBtUs2SB1wKWWsSHpSsm9ntQrWKtWMUBiqtVjQ3ppLuwBPiSflXU9ku2BtsQz7mh6KerQ/DzX08PCuVRhkn1qSDPifs4pS68wZYzKar0T6SohLaRzoQypIrBgcgpICuQfiVrzeNq6Ps3f8AeQy6dLIFWVc27OcBJMghc+ROD8/OufC444BHDDHII4NTnj2uxxfpOv8AQcld92DmDWu3xV2B+3DD8a4gOflzXY9g4wqzgHjehUeQK5H+Psq+HHWaPkeeOuiegPTDrQWFd0eaFipV6lME1oy1qdQ1qG3O12JbGdoGT6Z8BWtm7VE/skA9WOfuH+anLmwx8WtMeHPKbkdctBu9Thh/aOAf4R7TfIVw8uuTtkGQgHqAAuPgRyKRzWV55fTbH41/yrrLzteekMeP6n5/0j/NaC71GWU5kkds+G7Cj4KOBSResZrPLK10Y8eOPqLNUZqGWqjNis7WghfPunnyNKzMarI3jVTIW4wW+AyeOTWWWS5Dtu3AptTWshlp+J60xvhNg2KsoqoerBqohBWG8KxuqrHJpBeqk1M1hqYYZqXlkoj0hdPgGpyuhJsISUeJ6RFHiNZY1dg9wvHFUgfzznz86LnigrkceVXfe0/Q5auo7BTYlkT+JA39px+DVyOa3nY+fbdJ/UHT5rkfeorTC/tGfLN4V6G9AeisaA5rteYrUqualMNB9XUsZCq7j1bHPAwPwrVa9aADvVwCOGx4jzp3UL9Yhk+PAHiTXPatczNww2qecD8z415mVenhjS2+oZKXt4mkO0YB9TinRo03nH/cf8VONv8ATayT3QTLWO9p6Hs+596RF+ALH8q21r2ftEGZXmk8wAEX5Dn760kyrO54RzDz0xZ6fcT/ALKGV/UKdv8AcePvrs7S80+D9nCMjx7vc3zY5p//AIugHhL/AGj/ADT6T7yReW/44ub0/sFcyEd80cA8ee8f5Lx99d72e7OW9mMxpufGGkf2pDnqB/CPQVqB2yg/hl/tX/NEXtrbj92X+1f/ANVeM48ftlnebP6cj270hLW6zEu1JV7wL+6rbiHC+Q6HHhnyrSJJXT9udZhu44zGrh42PLAAFWHI4PmFrjg9Y2yXw6sJbjNn1kq3e0gJKz3tHdXVsVlqNLg1rxNWWl5o7l1PiasmWkBLWTLT7lo00ta+6fw+2rtJXSdl47OFhNdF5JByibMxp5E8+033D1qbd+D/AI+WjGgXXdd/3Evd9d23nHnt97HrjFIoa9e/4vtT+84/7DWn1JdMum5Uhz+9GjRt8TgYP2iqvHPqs8ea/wCWLgY5OKxI2faH2it/qfZQJzbziT+l1KN/cOD8hWhlsZo/ejcfAbh8xU22eK0xuN9K7qe0abbPE3lIn3sAfxrVMSOCCvxBFMWU+x1YjcFZWxnGcHOM08c/Iyx3HrbtQGaudTtYG/6TZ8t2fypvTtYWcldrIy8kEg5HmDXfjyY31XmXiyk3Y2m6pQd9Sr2z04LX58yKP4eaYhuw67X5pPXlxMR5Ko+7ml4mxXmS9bXrWSyGLi22nev/AL8afs7rIpOKeqk7DuHQ1U8eYmzfit0JKJ31a1J6y01X2Z9VL3rkdfxpIvV7mWk+8rDK+W+M8GN9TfS++pvqNr0PJJgE+la3NMyNkYqsFuzsEQbmPAA6mj6MIGoDTFxZNGxSQFGX3lIwRxn8CKwID4YNGzDrFXaIjwP41UUExurG6sMarRsGLcZOfAU53lKRnArJelsaORtk4+fpW60/Cjiuehkxx862lvPWmDPON009BlnxSXf0GSetezHq1WoAlyxJJNEsrMtz4ePkKtt3t6CjSz4G1eBUSTe61tvqGGmWMYXr5+NY0Gb/AJgHzVh92fyrWSPTGitidP8Au/2mqmX7RGWP6123eVKT7ys137efpyOtvmdvgv8AtFJhqNqzZlP2fhSua8zL+VerjP1hpXoqSeBpRTVg1OUrB0k2nHyqzTV0Ol2Okdys19e3RkIJNvbW+HjwSAGlkBUnjPHnXTdqE0fSltsaY9xNNGZ3juLyRZLdDju+9Rcrubn2ccbaVyV128xleli1dTr/AGotLiFooNKtLRiVxKkjtImGBO3gDkDHPgTXKGotVIvmrCuy+jbs1ZX8ojuZrjvGfbHbwR4dkChmlkmYbUjHIPjxxziuh06HSL2+bS7XTh3P6wC+S6laWNY1JM53ZXZuGOTg5HmBQby8qfCi2jtE6yLyR4c85GCOKAZcEgHIyQDjGfWtv2Z0aS+uI7aP2TIfaY9I0HLyN5BVBPrwPGr1LE+YSvbozOZJD7RwPsAwB8hQ+6Pr8qe1FIkmkSBzLErssUhADSIDgNj161SSNlxuVl3KHXcpXcre6y56qcHBHBqZhD7EiSPGsGU01IARSbqR4/dSuNhyr26l3C5C5PLEcAeNUuYwrFQQ2DjIGAfXHhWO6bbvw23IXdg7QxGQN3TOATj0qgOKWqPC1VJohFddHoNrp9sLjVFeSedC1nZI5iZEIIWe5YcoM9F6nHjztNBx0bU5HNiuv0zQ7fTtObUNQjWWe6RotMt3HADDBuHXyAII+zxYEcKrU5SsPGeqPL4UAVaPrmr2jRjdtGB9tBZqqzVRjRaNMs1G0xsTJ8T+BpUmj6ef1q/H8jTx9wZTxXUd5UpfNYrt24dRzl82XJ9BQBRb3qD6UAVw5e3oY+oKDWc1QGpmkNO0+jnS4mkl1C7GbWxUXEg/nS5/UxDzJYZx6AHrXM6zqU1/dPPJl5Z5M4UFjk8IiAckAbVA9BXZ9vB+jrGz0deHK/pDUPNpZOI0JH8IB49ENW+inSpSl1f28YmuIu7trIEApFLOSHnfI9kIgJyeOTU1UcFd2E0Oe9ikj2u0TbkZQJE95Mn94ZGRSua9A+lktD9TskcywR2y3CTZJF3LcEvNPuJ9rcenXGTzzWi+j7s/9fvoYG/ZZ764J6CGP2nyfDPC582FAd32PjsNJsc6lLNDPqMW4CFczR2m4ALnB2d57Rz5DHBFavttqbW0KWumRW9vYXakxy25eSe9CttZJpHAcMCQDHj97GSDXNdqdUk1fUZJIUeQyP3VrGqksI19mNVXw9kZPqTXr+h6bDawx2nt3NzpdvJcyLDGtzIl1dvx3SEgO0YVuD/Ep60G8c1vsteWEcUt1C0Ky5Ee5lL5ABwyg5Q4IODiur7NaHcrp5FpC8t5qIZF2gKbewRsOzM2AneuNvJ5UcUxf6E17Jb2lyZbUyPtsbUyLLeYkbvLq+v2I4ZlVzjAJIAACqSexk1R7y0uZLB0tLVXGmRy7gkdtawoDNcsQcsSuEjUcjPGCxNPZaeb9hezVtOJrq+uBHDZMHuoBEzPIg6KJM7RvcFMAknB6cGthrhTXblpNPguEKgNPNdTxx28EIG2NNqjbEoxwASTg8HkjYXGirNptvHYq1vZ3NxcXl5cSMWW3gtWEMfet4sQC4TPvcD03lh2YR3sbaKOSPTSo1SYyEFr6aTc8EDfzGWOMZUcAbs+Bo2NPL7ns7cpcy2Xd95NCGaURsHRUVQ5fecALtYcnHUDrxQNQ0O4iWFpomj+sZNupx3sgyACI/eAJYYyBnwr0WbtGLGya/lRZL7VZDdKjcpDbIcRBh4oBjA8SRnIU1e17X/WVu9VWyhikTuooMsbqa4vZQI4ArvjbHGuX7tQMkg9afalpwepPqAthpjwMsVtcbXWOLeWuZSxRZXQkO/JAA9BzgVz9/YyW8jQzxtFImA6MMMuQGGR8CD9te7x6nFo9pPEirPPYxLPdSt7e/UL07E+JHO5uoXAHVq8FvbySaR5ZWMkjsXkY8lmJySaUOup+jTTo5rl7m5G63soXvplxxIY/wBmn2tzjx2kV0nZjs/9dnl1vXDthCte90wO6ZF4QleohHCqD7+ABkZrh+ynay50x5JLYx/rE7uRZE7xGGcg4yOR+ZrrfpAvZ4bWCwmkaS8vNl9qbscHLHFvAccKqDnaOAVyBzSohG6sdQ7S3Ul2qxxxBhBCZZBFBEP+nAhPvSEHJAHU54yK0eg9kLu8kkjiVFELFJ5ZJFjt4myVw0nQkkcAZJr1ibR3sppJWj222k2btpsTDH1u5EatLdFfEB5BlugJXHINVsezriS0SdSbS2h/Sc3HOp6g6PM2P5m0L0wcBcfvCkbyObs/crNcW/dl3tRI1ztIZI0j95y3Tb9/pniqato1xaCM3MZhMyd7GrECTZnGWTO5M+G4DNek3PaUaVZxTSRpPqGoyrqdwG4SOLfuiDDr09xTkK24/ugHiu2fbEagzFLWG1EkgmmYMZ7iVwCq7pmGQgBwEUACqlTY5kmsZqpNYzQWmc0ayPtg/H8KXzRrU+1Tx9wsvTcd9UpLdUrp7ufqUuxwDS9MucjFKmufL26MPSwNXhlKMGGMqQwyMjIORkHr0oVTNTtbadotclv7iS7n295IQW2gqg2qFAUEnAAA8aTt7+WJXSKWWNZRsmVJGRZV59lwDhhyeD50uTRI08T9lL2Gyk1S4nhit5pnkigz3EbHIjDdcHrjjp4eFP6D2muNNMktoUR5IzAWKByisQdyeTAqOuR6Vtfoy7E/pR5WlkaCFAIw4wGknf8AZxruBB4yT49POjdlOycFxbXNxfG8UQzx2gS2jWWRpG4cbWBJwSOnhnrVbmk2Xe2vl+kzUihRJIYCwIeSG2hgmfPm6rkH1XFcza6jNE5limlikOQzpIySNuOTlgcnJr0DtF9F3dK6WUkl1PFdpaTJhQAk6K8D4HK++qtk4yCeBQ+03YpNPa3gt3eZrx/qRnYKY1cMiT90o5ALOFGTnCv55qVuLD3cL9//AMxHI67xJ7Yd0mUru39SGUtz45oERn29yvfbGZW7sb9jOVyp2DgttHHjivWP0fqFtqUWimaIJJEwguBb4GxYGy+zdyymPoTwUXGBgUHsjcapqUd1PHPEEttzR5hyLqVYyREoDDbkKH8dpYYGCRQHmD3k6obZpJljVyWhLsI1cHkmPON2R5U5aazdKYdlxcZgO62HesVgP/xqThfl046UhFHJOzEDe2HmfkLwAXducDzNdJp/Zm7Qbmt5ATnOQNwwNxyM5HGT9hot0JNgakbu+k7+6l7xyoXc2MhVzgAKAAOT086ytnMsYiFw4QSC4CDKqJQu0SDnhgOM1uYtJn4/V+8iSpllG5ZNxTbk8khW9nr7J4or6FdfyJfP3enx8qntT1GlhuriKK6i3pMLsKLjvQzuWR96yB853gk8nPWuZnjIOCMHxrvJOzl5jP1eTnoMDd/bnI8PDxrTT9nriclI4maRdxKgjeApQNkZ6frF+OeOhpylY56wuBFLHKUEgR0kKHhXCsGKn0OMVtta1d9Qu5r2YAGVs7RyFAAVVBPUBQBmh/8ACV91FrKeCeADx6YPOeo8xyOKKnZ+7iRme3lCqDI7YGFUDk9fDBz5YPkaqe05ejUXaO7jkFwt1OJUQxo7SGRlTHKe3kbfTpkA9a1UGv3kbxSrc3G634tyZWcQAjBCBiQFI4I6EcVtLnsrfDKfVpCTlRgoysQOQGDYPj0PgR4GhJ2Tvk3BraQbfe5U4PPs8HluD7PXpxyM1dVM3I1Gr6vPdyme5kaaRsBmbGcKMAADgDA6ClAaf1fRprYgTRPETkgNjnHXGPiPmD0IrWg1HpYhNYzWM1igLZo1r4n7KBTEfAqsfacvQ2alD3VK02y0HmqsuaxmpmoaBkGsGiMaoamxcQCs5rFYpB6uvbbT9OjtLGG3+vrbNHdvcLcy2qm7OS7BAv6wKCAN3GOMee+i7eWGnu31W4WaO51N7i5Cq6slvNAFZgdoxtk9rjn2a8KqUjeudl9cttLW+uPrsl4Z51iLIWaYwAuVkLPjM7gsBz7IDNzjFbbs1rGl3kcKJNJB9V1CK+/56aCNmDK4ZYiuBsBVTgdMDwxXiDSkgLk7QSwGfZBIAJx54A59BQ6A9u7H9sre4N01zJGk9u97Ppskkix94l0X3RBmOM72Uj0byBq2m9qNK06WxsFkuJPqj+3PC8P1Gae4TZLJIxJZlUSOODwMjnFeH1kUB05s7aHUpomuWhgWSZY57du8yhz3e0pnIIIBx61ty0P6xxq0zMxd1HdzKWPDDcc4JOSPDBHj0rhYBzmm6VVHa6RNAw/W3txCwUIu0vIoUJEwGcAgBzINuMDZ1OAWa1GWJEZrfUJ3PskRkSbmYMRzJkDgHPT8jXEwzUwstI62T6jN/Om8v2r9MYx18qTkuH/jfx/fYdcZ8f6V/tHlQy9CZqCBm1W5ifek84OQc96x5ByCcnnnnmlG1KZl2maYrjbtMrlcY24xnGMcfCjXK5GK1w44qk062rXGc/WJ89c98+eRg858uKqNVn/nz9QT+ufkjGD16jA+VKGsUEamvJJDmR3kPm7lzzjPJPoPlQyA3pQgazmq2WmCMcVACahNXU0GsqYq+apmsZqkUTNSqZrFGxpUVmpUpGwapUqUqcQ1KlSkbFZqVKAxUNYqUjSsmpUoAsNNLUqUqqLQ0ytSpSNeqNUqU0gyVr5feNSpQSprFSpTCVmpUpkxV1qVKZVmoalSmTFSpUoD/9k="
                              alt="These Things Happen"
                            />
                          </div>

                          <div className="track__number">2</div>

                          <div className="track__added">
                            <i className="ion-plus not-added"></i>
                          </div>

                          <div className="track__title">بچه کابل</div>

                          <div className="track__explicit">
                            <span className="label">Explicit</span>
                          </div>

                          <div className="track__plays">4,568,782</div>
                        </div>

                        <div className="track">
                          <div className="track__art">
                            <img
                              src="data:image/jpeg;base64,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"
                              alt="When It's Dark Out"
                            />
                          </div>

                          <div className="track__number">3</div>

                          <div className="track__added">
                            <i className="ion-checkmark-round added"></i>
                          </div>

                          <div className="track__title">الا گل دانه دانه</div>

                          <div className="track__explicit">
                            <span className="label">Explicit</span>
                          </div>

                          <div className="track__plays">13,737,506</div>
                        </div>

                        <div className="track">
                          <div className="track__art">
                            <img
                              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhAWFRUWFRUVFRUVFRUVGBUVFRUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAgEDBAUG/8QAOhAAAQMCAwUGBAUDBAMAAAAAAQACEQMhBBIxBUFRYXETIoGRofAyscHRBlJi4fEUQnIjosLSM0NT/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EADQRAAICAQMCAwcEAQQDAQAAAAABAhEDEiExBEFRYfATInGBkbHRMqHB4QUUQlLxIzNyFf/aAAwDAQACEQMRAD8A6y+afgTXs/ZlXEEim2QNXEw0dStRhKXB6MHS5c7rGvn2NOO/D+IotzFocBqWHNHUarUsUoqztm/x3UYo6mrXk7OUuZ4bJUBCoJQAoCEBKAEICAEAIAQAhQVAKAFQCgCUAKgFACAFQEqAEAICVSilQyz1uE2e2vU/p85FKjTpktaYzvqDMXOPivVGGp6eyP0GLp45snsLeiCWy7t72xNg7Bo1hULw7u1XsEOI7rYj5qY8UZXZjof8fhzKble0mueyOFtnCto16lNvwtIib6tB+q4zioyaR8vq8UcWeWOPC/CZiWTzggBACAEABQhKAEAICC4cUotMr/qWaZ2+Y14LWiXgdPY5KvS/oWKHMEAIAQAgBACAEAIAQAgBACEHQ0KoQ9VsD8QtpNFKuC0gAB+U3buDhrbivTjypKpH3eh/yUMUVjzKq7127X3+Ymzdusw7Kogue6tUcxsESDABJO6QedkjlUU/iZ6br4dPCapuTk2l8Tzdes57nPcZc4kk8yvO3btnxpzc5OcuXuVoZBACAEAIAUII594F+PvxCtbG1Ha2U4jHMp/GcvAWv0jVbjjlL9J1xdLkyv8A8e/rucDaH4gc/u0xlHE6n7L14+lS3lufc6b/ABMYVLLu/Dt/ZyauJc74nE9SvSoJcI+nDDCKqKoRtU7p8FaRtwj3NuAx72nul3QH+R5grlkxxfJ5Op6WE17yXr9/o0emwG0BUgEQTpzH0K8OTFp4PzvU9I8Vtcfb8m5cjxggBACAEAIAQAgBACAEIOhoRQhvZteqABLbaS3hx4retnqj1uVKtvoMNtVvzA8y0E6k+UlPaSNf6/N4/sYatQuJcdTcrJ5ZycpOT7iIZBACAEAtWoGguOgElVK3RqEXOSiuWI6tuNtPXeIRLwNRx3utzh43axYMrLON3HeLk5eWuvMr1wwanbPs9P0Cm9U912/Pnf8AC8DgVHlxkkkneV7EkkfbjFQjSQoCpqxHKmkXCnadAVhvc5OfvUh2UyDMEEHhPpvUbRmUk1RswmIh06GD0nWY4/YLnKFo8mbDqhXK/jw+H9nraLiWgnUgHpO5fOezPy+RJSaQ6hkEAIAQAgBACAEAIAUIOqaFUMggBACpSEAIAQAgErU8zSDvsRxG8KxdOzWOWmSaODtGu6mwd6QR3N9vORr4L144qUj7fS4o5sj23XPrj8nn3OXsSPuKJDVStFmX1Hks2Y1bWK6n3oVT2sql7tmrss7+VgOg3Lnq0o82v2cPM7eEwoaNF5ZzbZ8fNnlJms4FjiHQJHqFy9pJbHlXVTgnGzoLieIFQCAEAIAQAgBACAEBKhBoVNCqGQQAgBACpSEAICHOhEVRbOTjNttaSAxxI5gCf8hK9EOnb3s+ng/xs5pSckvv9DzONrl7i4x4CAF78cdKo/RdPjWOGlFBcTvW6O1JDwOKyYt+BJlxjemyJtFWOx8xO46dIN/JRrkxKKV14HU2e0TvjcBcnoF58jPndU3VG5+OLfipOA8D6Bcljvhnjj0qmvdmrN2GxTS3NNguMoO6PFmwTUtPc10n5gDx42XNqnR5pRcXTGUMgqAQAgBACAEAICUICgGlUoqhAQAgBACAEBEoDLjXG4BghhI5F1gbcBm810gvuerp4q034r6LevnseX2lULX5AMoGo3Zv0wvfiScbP0fSxU8evm+/l53+5gfe67I9sdtisrR0GpC6kjM3SGzX99FOxmvdI0PiqXlHe2c1+Q5IvxXjyVe58Xqnj9otZnxGErE755EQtxnBI74uo6dLY7Bw7nUspdDi2JHFebWlOz5PtoQzaktky/ZVB7GQ908Ba3Kd6xllFvZHHrcuPJO4Kv5Ny5HjIVKCAEBKEBQAgBACAEA6poRQyCAEAIAQCV35Wk8FYq3RvHHVKjPXqkNzcpFiPUGy3FJujtjhGU9K/j7HCx2LeCXZjB7p7sFstaQDcwLkc73XrhCLVH2un6fFJKNb887Pdp19N/DwOM98+OvNepI+so0RnGkBKLpfNiPCqNxdjtFuqhiT3EIVN2TKGeT0X4frS1zTqD6FeLqI7pnwv8njakprhnVIXnPmJjGpA3nkBKlbmVBtl2HNvksyOWTktWTmCAEKCEBACAEAIAQAUAypoVQyCoBACAFAV4j4dOHpf6LUeTpi/UU1q7WtjMNIvbdxWoxbdnXHilKVpd/5PJYqvmktdAcAC0ctJ3WgeJK+jCNbNcdz9PhxaaUlurp+vVUYzbd5rryetKwAncnAboUqmiWuUaI0MGKWZb2IeERYs6uxmGZGojx3R74Lz5mfM66Sqnwd9lwvI9j4ktmJWxDW6kKxg2bhhnN7I04CuHttusueSLizz9TiljluaVg84IAQAgBACAEAIAQAUAypRUICgBACAEAr2z7kKoqdHD2y4dm4zDmkAt14XPHUQV6sN6kux9roE/apcp7369WcOlhCaZqTABIA4xz3dF63OpaT7E+oSyrEluZCF0PUmWUwSoznJpBX10SPAx8FZ5LR0XmGZKFIkPvKlEcdqOtsaqA5efNHY+X1+NuJ32e/H95XiPiSfr18hajT/aAqq7li1/uLMM4h+U6gfO/2UktrRjLFOGqPd/0bVyPICAEAIAQAgBACAFQBUBKpSFCAqAUAIAQAgOD+IsGapbljMGmZIG8R9fNevp5qKd8H2v8AF9QsMXrur/jcy7RwDKDJIa64gFzgSd8N36m/JdMeSWSWx6el6rJ1GSla5t0mvrtX9nGcIB58osbgheo+ut2iC2Al7i7ZXK1R0oAhGARlYNClkbNlBpELnLc8mSSkdOntJzPivp13rg8SlweCfRxyP3dhxtwHRjuO5T/Ttdzn/wDmSXMkdHDh2bO6xMWF4EQuEqqkeDLo06Ibmipi4PRYUDjHBaIbiydyrgkHgS5Zqa6VzqjztUMhkFACAEAIAQAUA0KlFQEIAUAKgEBDnAfwUoqTfBnqZXcQdJAGh1EXEeC2rR3jrh69fscfadLs+zcGl0P+J1we6coItf7L04nqteR9Xo8ntdcW0rXC+Kt9zi4uJAzB3TcNwjcd0cl6ofA+vgurqvXP82Z6zpK3FHeCpCgac/RUrbVlrKU3kCyy5HOU62oqK0dUEoTg2UjmHRcnszyzWlj1DI6KLkxFVI6GDwbcjTxhx+3RcZ5HqZ4c/US9pJeGyO4AvIfHZRVpz1+a2mdYTpFVN8FaaOs42jVh6l/egt78VzktjzZYe6bJXM8oIAQAgJQgIAUA0oaEVICAJQEIAQorhKpU6MeOqNaLySdAA4u6iJ848V0xpv0j19PCcntsvNpL9/XkcTHY9zm5Ad4MGxBB1EiW9Odl6seJJ6mfY6fpYxl7Rrx44f5+Plvuckk3Jvr4nmfNen4H06SpR9IR7Y971UzcXZNOlaSRoSBqSRy3BG96MynvSQN0v4DmjK+RXCPeiGkNTb9/T+FGZk/AuoOgxyWZK9zlkVrUX5dVizhfBqwNdzBlIls+IlYyRT3PP1GKE3rXP3O5QeYvqvJJbnxskVdrgd4lQxF0UVGT1+fVbTO8JV8CKDoN/fD5pLdDIrSo306kri0eKUaLFDAIQlAEoAQAgGQoiAEAICEASgBCmTEQCHO0kg77Fpi3UBdI77I9WJuScI89vr/Zy8Dhu1fULwAA4ggak7hI0aBAga3XonLRFJev7Po9Rm9jCChy1s/Bflve+xg2sGU6jmNFsot+U6kD0su2G5RTZ7eic8mKM5Pe/qvM5bwu6PooGGJj2EaEknyMWlE0TUmRVbBI8kTtFhK1ZaCD9Fk5U1v9SC+8q1saUdqNVOpMSFzaPLKFcM24cXXKR5cl1sdii2R1C8snufIm6kGHqTINiDB+45FJLwLlhVNcMZzURlMRzffBU2pUTTqEai3EX9FGrJKClxz4Gqm8HQg/Nc2jyyi1yixQwCAlACAEIPKGitUBKgIlUBKFoiUAtR0X8+nFVI1GNujNWl7gB8Ih08Tuj5+S2vdV9z0Y6xwcny9vl3/H1MeMPZuzDutdAJH9pHdB6EZR4ArpD3lTPVgXtYaZbtXS8e9fFbv5teJxMSB2j7gjj4DReuN6UfZxN+yjsZ6rIgzrB6TxW0ztCbdqjRg6UyOSxOXBxz5KSZVWBa4tI0MnotR3Vm4NSipLuVVOe6fKVpHWO3HcSmbqs1JbFjoPVZWxhWi7DVNx0WZI5ZYvlHZwTBHNeabZ8nqJSuzpgQvOfObsqrjK4PG+zvoVqO6o6Y3qi4P4ovCycXsKQhqxS1UqZDHZSjVllHUjY10rnR5WqZKhCZQAgBCDKm6K0ICFCUBCAJQESqUTRU1u+THVBiYmBA0iDaV0R7INXV+f9HA2hRyOI3WjlZezHLUrPt9NkU4piVcOIEXkyOguPQ/NVS8TUMrt3tX/AF9/48R8NVDXugnTuzrm3A+J9FJJuKszlg5wjfz+Hr7mTEO7068ea6RW1HpxpaaLSzMARvtPPn5hZumc1LS2n8f+jM4R73rpZ6E7QpVKOwwQVHwZkrVHWoPLXN6/VeZq0fLyRUov4HeoukLyNUfFyR0skttHh4KXvZE6dkMt03Iyy3LCoYFhUorwqjSY2HO5SRnKlyaJWDgEoCZQUEoKGQpVKtFojMlFoJShQSgoglUtCPfCqRqMbKi0n+f2hU6KSRXXY8ggOi3I/wDFaTSOmOWOLtr19Sh2EDmwbyPGVpTpnePUOMrW1fQ4+IYaZygkwLcRmNx6+q9UXqVn1cUlljqa5fydFWJomMw3GDHS1lYy7HXFlV6H8R8FgzWkaQI8UnkUDnn6hYKfiZ6tI0zlmDoW8Pf1W01JWeiE45FqrbxLsNT7jpYCdx+f1WJP3luccs6yRqVLv68ysYQuDiNGQDO874WnNKl4nR9RGLjF/wC6xWs4q2acvA1uaQ0OvAPkAbSuaabo8qkpS0dzu4J8gcwvHNHxeojTZpcbgcfkPYHisHmS2sQmWzyPmQr3Oi2nSIpVCddfd1Wizik7XBYCsnOiSgIom/VJcDJ+my6Vk40TKCgUAKgeUKUqmgQBKCglBQSgK3aqm1wAQMQHVU2+CAFSt2rOZj6EOLiPi38CABHLd58r98ctqPo9NluCiu387+vVFWiCw5dHAnoYkFRSqW5IZGsi1cpibKkCQTc7t5AuD7+V9ZfA6dZTelr14+v5MNWn2tUncXaxq06W6XXVPRFI9kJLDgS7pfv/ANnSp7OtOYky7kDqJt7uuDy+R8+fWK6quBatENaGxEuEnnAE+n+5VSt369fg1DI5zcvL19/2M2LwpDhwI4aRGvWy6QmmjvgzqUX5fub8K05QCN0cZXGTVnizNanJM0YalksPh+X7LEnZwy5Ne75+5qHHw9+9y5HmfFFNC7G8CAT5T9fRbltJnXI9M5FGKBmWm4uOfEHjK3GqpnfC1p0y+Y+HxIdbQjUcPuOakotGMmFw37ePr7GgOWKPPQjT3h5q9jo17jL5WDhRIKChpUM0GZBQ0oaopLlqjVESlFoMyUKRGZBSCUFINUHBLCjElTKZWjpVjByUSgIB8jbiE3Qtx3MeGbBIF2i/Sb/ULpJ3u+T15Zalb5Fp4XL2jBo4FwHA7o4R9FXO6ZZ51P2c3ytvXxKxhiMhFjAFxawBAPr5K6lvZ0eaL13urb/tHSw4OUSB4LhKr2PnZGnJ0PUpNcCCJBUTa4MxnKLuLK20ABGvXhwWtTNvLJuxg0BSyOTk9yQboRrYl+lvBRGY87k0mZWgcAB5BG7dictUnLxKnUy4m38LVpHVSjFURRwrRLzcxA8UlN8DJnk/cXAxpidSpbMqbrgZjQFHbJKTkWSpRiiUJuEhBTCQhKY8hDVMzly1R0ojMgoMyCgzIKIzK0NJOYbx4hShpfYjNFwUqy1ezQjnDmPULRtJ/ESTGiuxqldA59wR5Il2CjaaYuBvOlvO/wDCZDXU7OzW2nvt5LnZ5XO1QGnO/wBEsKdDARvQjdkEoKFJVNJCOcqjaQ9MWlRmJ80MoQamJUZiWxGIf/aPFWK7lxR/3MkmOjfUqEW/zKA5bO9E5lCUTmQlE50omkM6UNIZ0GkbMlGtJmLls6UEoWiMyUKYZwlDSxmuBMKURppWWFizZyUhCtI2qFIVNiyheSGRvRlldUD2gmRr81U+wi2lpfBpYAR9iubPPJtOicnMpZNXkGVBZBQqEKppBroheC1ZOI0IQaksszO2VNuefy5rR1dJeRL6g0GgRLuSMHyxMy1RvSLnSi6Rg9KJpDMlCglBQZglE0sfOEoulmQlbO9Bm5JQoM3JKGkjPyShpGY+4t8lGiSjtyaS5YPPQhVRtFblTaKi+61R10uie0HBKJofiT2gSiaGPTqwsuJiUGzQCsnGgUIK5U0iGtlLK3QZUJqGA5oRslCbilyUVIqZVk8p9ytNHaUEl50KhSZQlBKDcmUFAhNg8UAtR5VSNRiu5X3vzLex6Kj4Cl6lGNIF/IpQ0h2g4JQ0MjtORSjWjzGpPlwsjWxmcai9zWVyPKKSqVFTytI7RRn7QDit0dtDYduE0seyZIqjn5JTI4SQ+ccVKZnTI0Un2XNrc884+8WByhiiWiUI3QxUMoWFTQZUFlZfaRpxG/p91aOmlp0+fXIUichJAmDbrYBHzSJOtaS42/spaPf1Wzs2+AFMcUsa2ApjipY1vwIyDirY1MkMCWHJk5eahL8iMvNC35EZFbGofsuaWa9o/AzZunqtUddIZ0omkO15pQ0eQpq8/RWjWjyLKD+8LqSWxzyR917GwlcjyoQlU0kZqr9TwW0j0QjbopoYoPEOIDtx3dCtyhW6OuTA4PVHdeH4Gc5wsYU2ZEotWgDzySkNKEdV4AeqtGlDuzW3Lw8Fz3PM9XiMDwEKGWr5Lm1IF1itzjKO4CrKukuigfUhErEYN7Fd3XdYfl/7fb5q8cG7UXUefH8fn7DsE6qPYy3SpD1BaPdv5UXJiH6rKSRkIOs+mq13Oqv2iaKOz5lbs7avIAzmUsagyJY1BkSxqDIljUTlCEtkgKEbHyjglmrfiZcy3R20i5laLQpPL0SjSXmRPJKFPxLsMO8LLMuDlmdRNpK5nkEcVUbSKW4Z1Z7KTdXuDZ3AbyeQ18F1gtz2dNG5GzbbadekalGnlGHeKVhBdQNqVV3F2YOBP62rrZ7pSTVrt9iTsKk2o2gMQ81qlNr6TQxuQOdSD2sqOJmXOsIG8E6o6Zp4oN0+TFgcBnpipUNTv1eyYymzO9+VuaoQ0kTEsHV3JSkco441Z2aH4baSwzWpNc57XCvTDXNLKL6oc2DDmnIQd4hZaszPFbS3S43+DZQMJRqUzUo1Kjsj6bagcxskVCQHUw117iMp5XXOjyvHFxtXtXK8fD8GnE7Hy03VGtrsyFocK9MMzBxgFhBIsYlp4qSjtZnPhUcbmrVeK8S/Z74oltGrTp1s5zGplGdhAyhj3ggQc0i0yFIvwOfTybitLSle991W1N/YodhXuqvFajVzgNOTD0mGZ/uMHKAeIsSVrTb3OvsZTm1NO/JL6hjdj5GudmdLRTqBj2ZHClUlsubJ7zXiDuuCpKNLYzmwLHF6edn509vvyaBsUBjaju0dZuZlJmZ2Z4LmjkAzKST+cBRR2MLp1GGp2+LSVvff5bbssOw8o7QiqaZDS0Np/wCqS4uGUt0bGR0nTSNVNHcj6Vpa3q07dve37eVVuyXbHa0dq4vFKAQCyKuZxLezykxPdJnSFHGt+xzn0yhHXJtR+HvX4Vx8+KOftilTbhWinUJH9S4kOEOaexZ3TBg2gyOK6R/TaPXi0+wUob23zzx8/A4Fv/p6/utfIb/8QIH5/X90+Q37x9fQAP1+v7p8hb/4jCPz+sKfIy7/AOP7EwPzHzKEt+BIA4+qli34fsSBz+aEvyLIHH1KhL9bGLMulHpaIJVoJIjMhaQZuYQUa8CNT4LnM83UdkaVzPOhHlaRqImE2kaDnuYD2hZkY8GOzzEZnD9REtBtEldYrY9+H3Y33L8P+IK8uFapUq03NcxzHVHEEOEAiZggwQY3LR19pJcu0UYp7sTWD2ObScG0gC94aA6lTY0HOdCckhE1YjkTlvt8Tp7R2w0YgljGupdlUpEMcWZjXl1d9NxEtJe4wSNGhLRqeaOrbzX15JwG0mUmBlLDuyh7ny94LnF1GpRgw0AAZ5sNx42w5JHm/wBRDHtHx8fJrsinY+1XYTN3M0mmRJgAMzSBG8h1juhRSRnDmjG67l1DF0hTqspUnjtMkue8OPcdmgANAjXmsSdKjz5ZxhB44rmu/wA/ARuIo5MtWk4wSc9N+V0cHBzXAjwCRomHRxKPzT9I01NqMqs7KpRIpjs8jWPGZvZhwAc5zSH/ABuOgg6KuXY7T6iMo+zaddqfh8tzVgsax9RjnZKdJlLsX03VJdUp98kNES494abwDZFRISjKSk6UUqavlb/X8lTNqZjU7QOLaj+07jsjmOAIGUwQRlgQRuHBZ1eJx/1FuWq6bvZ016W1Et2m0ZmZX9m7L/7T2gc2YeHkRJDiC2I06qaiLOlcael+e9rvf8VQ1HaLJczs3Gm4NBDqhL8zSSHh0QDciAIUcvoYnmjTi4txfO++3e+PlVUc/b2NYabKTKWUB7n5i7MXHKG96wE2Gm7zW8bVUd+myReNwiqp3zvv48HEIHDyC6He/Mj3oVShPuFBRIdyQy0E/pCFrzDOeASkNK8SQ48AlEcV4j5zwTYulGWVo60KSqWgKFIVB1KLMoA8+pXnk7Z87JLVJssCyYspc7VbOkVwc0mV3o+ikkqGo0i8wB+yjaRmeRQVs6baQaMo/k8Vwtt2fOc3KWpkNpjglsrm+5ewLDOEmNChLIiLdUHJleczmjnPlf6LqlSs9UVpi368C2q+BosJWcoR1PcXD0z8TjfgNwVk1wjWWa/TFbGkFYPPRDXKlaob5qGfMq2i2WA8D8/YVxv3jp0rrI14o5srufRoJVJQShaREoKCUFBmKCkElNhSLJ5qbF2MpK2dSEKRKoovwTJd0usTdI49RLTCl3OiuJ4CHFEEjPVHdd0W1yjvD9aMFNhcYGpXZ7HvlJRVs61GmGCB4nivNJ2z5eSbnK2MhkZoUZGy0BZOVggFcqVGKp3XA8D79F1W6PZH3o0aX3jguaPOttiM5G5Wi6UwBJN0DSXA76gaLrKTZlQcnsXUxv8AFZbOMn2Fxw/0ndAfIgq4/wBaNdO6zROFm5r1n2q8iC7mlCvIM3NBT8A8UG/gNPNCV5BPNCEyFBTHnmqUUoUhDQKg07P3rnk7Hm6rsbQuR5BX71UWPKKqnwu/xK0uTrH9S+JRs74j/j9Qt5ODv1X6V8fyb3LgeFcgVQM1Qyy1ZOfcgoBT78lTRlxfv1XSB6sJopfCOiw+Weef62M5QhU/RaRtfqNCx3OHccfdQz2IxX/jf/g75FI/qXxNYf8A2R/+l9zz69h9zsSqQhyFQqFYzUJIkKEBAMqD/9k="
                              alt="When It's Dark Out"
                            />
                          </div>

                          <div className="track__number">4</div>

                          <div className="track__added">
                            <i className="ion-plus not-added"></i>
                          </div>

                          <div className="track__title">بیا ای جان</div>

                          <div className="track__explicit">
                            <span className="label">Explicit</span>
                          </div>

                          <div className="track__plays">12,234,881</div>
                        </div>
                      </div>

                      <button className="show-more button-light">
                        Show 5 More
                      </button>
                    </div>

                    <div className="overview__related">
                      <div className="section-title">Related Artists</div>

                      <div className="related-artists">
                        <a href="#" className="related-artist">
                          <span className="related-artist__img">
                            <img
                              src="https://pbs.twimg.com/profile_images/1195748852814536705/rJnBZewg_400x400.jpg"
                              alt="احمد ظاهر"
                            />
                          </span>

                          <span className="related-artist__name">
                            احمد ظاهر
                          </span>
                        </a>

                        <a href="#" className="related-artist">
                          <span className="related-artist__img">
                            <img
                              src="data:image/jpeg;base64,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"
                              alt="ٰولی حجازی"
                            />
                          </span>

                          <span className="related-artist__name">
                            ولی حجازی
                          </span>
                        </a>

                        <a href="#" className="related-artist">
                          <span className="related-artist__img">
                            <img
                              src="data:image/jpeg;base64,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"
                              alt="شفیق مرید"
                            />
                          </span>

                          <span className="related-artist__name">
                            شفیق مرید
                          </span>
                        </a>

                        <a href="#" className="related-artist">
                          <span className="related-artist__img">
                            <img
                              src="https://wikieon.com/wp-content/uploads/2020/05/Seeta-Qasemi-4.jpg"
                              alt="سیتا قامسی"
                            />
                          </span>

                          <span className="related-artist__name">
                            سیتا قاسمی
                          </span>
                        </a>

                        <a href="#" className="related-artist">
                          <span className="related-artist__img">
                            <img
                              src="data:image/jpeg;base64,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"
                              alt="غزل سعادات"
                            />
                          </span>

                          <span className="related-artist__name">
                            غزل سعادات
                          </span>
                        </a>

                        <a href="#" className="related-artist">
                          <span className="related-artist__img">
                            <img
                              src="data:image/jpeg;base64,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"
                              alt="غزل عنایت"
                            />
                          </span>

                          <span className="related-artist__name">
                            غزل عنایت
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="overview__albums">
                      <div className="overview__albums__head">
                        <span className="section-title">Albums</span>

                        <span className="view-type">
                          <i className="fa fa-list list active"></i>

                          <i className="fa fa-th-large card"></i>
                        </span>
                      </div>

                      <div className="album">
                        <div className="album__info">
                          <div className="album__info__art">
                            <img
                              src="https://aryanasayeed.com/wp-content/uploads/2017/04/product_005.jpg"
                              alt="When It's Dark Out"
                            />
                          </div>

                          <div className="album__info__meta">
                            <div className="album__year">2015</div>

                            <div className="album__name">افغان بچه گک</div>

                            <div className="album__actions">
                              <button className="button-light save">
                                Save
                              </button>

                              <button className="button-light more">
                                <i className="ion-ios-more"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="album__tracks">
                          <div className="tracks">
                            <div className="tracks__heading">
                              <div className="tracks__heading__number">#</div>

                              <div className="tracks__heading__title">
                                آّهنگ ها
                              </div>

                              <div className="tracks__heading__length">
                                <i className="ion-ios-stopwatch-outline"></i>
                              </div>

                              <div className="tracks__heading__popularity">
                                <i className="ion-thumbsup"></i>
                              </div>
                            </div>

                            <div className="track">
                              <div className="track__number">1</div>

                              <div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </div>

                              <div className="track__title">bache kabul</div>

                              <div className="track__explicit">
                                <span className="label">Explicit</span>
                              </div>

                              <div className="track__length">1:11</div>

                              <div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </div>
                            </div>

                            <div className="track">
                              <div className="track__number">2</div>

                              <div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </div>

                              <div className="track__title">saat-e brand</div>

                              <div className="track__explicit">
                                <span className="label">Explicit</span>
                              </div>

                              <div className="track__length">3:00</div>

                              <div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </div>
                            </div>

                            <div className="track">
                              <div className="track__number">3</div>

                              <div className="track__added">
                                <i className="ion-checkmark-round added"></i>
                              </div>

                              <div className="track__title featured">
                                <span className="title">afghan</span>
                                <span className="feature">حبیب قادری</span>
                              </div>

                              <div className="track__explicit">
                                <span className="label">Explicit</span>
                              </div>

                              <div className="track__length">4:11</div>

                              <div className="track__popularity">
                                <i className="ion-arrow-graph-up-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane" id="related-artists">
                  <div className="media-cards">
                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/hoodie.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Hoodie Allen</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/mikestud_large.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Mike Stud</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/drake_large.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Drake</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/jcole_large.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">J. Cole</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/bigSean_large.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Big Sean</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/wiz.jpeg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Wiz Khalifa</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/yonas.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Yonas</a>
                    </div>

                    <div className="media-card">
                      <div
                        className="media-card__image"
                        style={{
                          backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/childish.jpg)`
                        }}
                      >
                        <i className="ion-ios-play"></i>
                      </div>

                      <a className="media-card__footer">Childish Gambino</a>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane" id="artist-about">
                  About
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </section>
    );
  }
}
