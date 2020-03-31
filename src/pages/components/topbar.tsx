import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./topbar.sass"

const Topbar = props => {
 return (
    <div className={'topbar_container'}>
        <img src={require('../../assets/curl_right.svg')} alt={''} />
        <div>
            <a href={'#historia'}>História</a>
        </div>
        <div>
            <a href={'#equipe'}>Equipe</a>
        </div>
        <img className={'logo'} src={require('../../assets/logo.svg')} alt={''} />
        <div>
            <a href={'#servicos'}>Serviços</a>
        </div>
        <div>
            <a href={'#contato'}>Contato</a>
        </div>
        <img src={require('../../assets/curl_right.svg')} alt={''} />

    </div>
 )
}


Topbar.propTypes = {

}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)