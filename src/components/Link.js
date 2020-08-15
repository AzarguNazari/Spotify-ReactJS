import React from "react"

export default (props) =>
    <a href={props.link} className="navigation__list__item">
        <i className={props.icon}></i>
        <span>{props.name}</span>
    </a>