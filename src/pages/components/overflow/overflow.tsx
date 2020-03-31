import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./overflow.sass"

const Overflow = props => {
 return (
    <div className={'overflow'}/>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Overflow)