import React, {Component} from "react"
import Link from "./Link";

export default class LeftSideOption extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {
                    this.props.leftSideContent.map(menu => {
                        return <div className="navigation__list">
                                    <div
                                        className="navigation__list__header"
                                        role="button"
                                        data-toggle="collapse"
                                        href={menu.link}
                                        aria-expanded="true"
                                        aria-controls="main"
                                    >
                                        {menu.name}
                                    </div>

                                    <div className="collapse in" id={menu.id}>
                                        {
                                            menu.subcategories.map(link => {
                                                return <Link name={link.name} link={link.link} icon={link.icon}/>
                                            })
                                        }
                                    </div>
                                </div>
                    })
                }
            </div>
        )
    }
}
