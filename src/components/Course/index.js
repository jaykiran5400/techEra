import React, {Component} from 'react'

import {Link} from 'react-router-dom'

import./index.css'

export default class Course extends Component {
    render() {
        const {details} = this.props
        const {id, logUrl, name} = details
        return (
            <Link to={`corses/${id}`}>
                <li className="listItem">
                    <div>
                        <img src={logUrl} alt={name}/>

                    </div>
                    <p className="LinkItems">{name}</p>
                </li>
            </Link>
        )
    }
}