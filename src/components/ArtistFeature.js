import React, {Component} from "react"

const style = {

}

export default class ArtistFeature extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content__middle">
                <div className="artist is-verified">
                    <div className="artist__header" >
                        <div className="artist__info">
                            <div className="profile__img">
                                <img
                                    src={this.props.artistInfo.picture}
                                    alt={this.props.artistInfo.name}
                                />
                            </div>

                            <div className="artist__info__meta">
                                <div className="artist__info__type">Artest</div>

                                <div className="artist__info__name">{this.props.artistInfo.name}</div>

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
                                        src="./images/seeta_qasemi.jpg"
                                        alt="Seeta Qasimi"
                                    />
                                </a>

                                <a href="#">
                                    <img
                                        src="./images/shafiq_mureed.jpeg"
                                        alt="Shafeeq Mureed"
                                    />
                                </a>

                                <a href="#">
                                    <img
                                        src="./images/aryana_4.jpeg"
                                        alt="Aryana Sayyed"
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
                                                    src="./images/ariana_cover.jpg"
                                                    alt="Bacha Afghan"
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
                                                        src="./images/ariana_3.jpg"
                                                        alt="Bacha Kabul song"
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
                                                        src="./images/ariana_3.jpg"
                                                        alt="Bacha Kabul"
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
                                                        src="./images/aryana_green.jpeg"
                                                        alt="Bia yar jan"
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
                                                        src="./images/aryana_green.jpeg"
                                                        alt="Ala Gul Dana Dana"
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
                                                        src="./images/ahmad_zahir.jpg"
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
                                src="./images/valy.jpg"
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
                                src="./images/shafiq_mureed.jpeg"
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
                                src="./images/seeta_qasemi2.jpg"
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
                                src="./images/ghazal_sadat.jpeg"
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
                                src="./images/ghazal_enayat.jpeg"
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
                                                        src="./images/ariana_profile.jpg"
                                                        alt="Aryana Sayyed"
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
        );
    }
}