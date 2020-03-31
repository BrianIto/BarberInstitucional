import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import "./equipe.sass"
import ScrollOut from 'scroll-out'

const Equipe = props => {

    React.useEffect(() => {
        ScrollOut()
    })

 return (
    <div className={'equipe_container'} id={'equipe'} data-scroll>
        <div className={'content'}>
            <div className={'divider'}>
                <div>
                    <h1>Equipe</h1>
                    <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam a enim non massa vehicula aliquam. Suspendisse potenti.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Mauris volutpat sed est id sollicitudin. Nunc metus dolor,
                        tristique in imperdiet eu, dictum sed quam. Aliquam finibus condimentum metus,
                        cursus vulputate neque mollis ac. Nam rhoncus a lectus eu placerat.
                        Donec faucibus justo non consequat commodo. </p>
                </div>
                <div>
                    <img src={require('../../assets/barbeador.png')} alt={''}/>
                </div>
            </div>
        </div>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Equipe)