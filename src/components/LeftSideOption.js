import React, {Component} from "react"

export default class LeftSideOption extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="navigation__list">
                <div
                    className="navigation__list__header"
                    role="button"
                    data-toggle="collapse"
                    href={this.props.link}
                    aria-expanded="true"
                    aria-controls="main"
                >
                    {this.props.name}
                </div>

                <div className="collapse in" id={this.props.id}>
                    {
                        this.props.options.forEach(category => {
                            return <a href={category.link} className="navigation__list__item">
                                    <i className={category.icon}></i>
                                    <span>{category.name}</span>
                                   </a>
                        })
                    }
                </div>
            </div>
        )
    }
}
