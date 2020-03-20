import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProjectThumbnail.css'
//import { Link, graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProjectThumbnail extends Component {
    render() {
        return (
            <div className="projectThumbCont">
                <p>{this.props.itemID} </p>
            </div>
        )
    }
}

ProjectThumbnail.propTypes = {
    itemID: PropTypes.string.isRequired
}

export default ProjectThumbnail