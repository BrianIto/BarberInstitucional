import React from 'react'
import {connect} from 'react-redux'
import ScrollOut from 'scroll-out'
import "./historia.sass"
import * as Rellax from 'rellax'

const Historia = props => {
    React.useEffect(() => {
        ScrollOut()
        let relax = new Rellax('.rellax')
    })

    return (
        <div className={'historia_container'} id={'historia'} data-scroll>
            <div className={'content'}>
                <div className={'divider'}>
                    <div className={'foto'}>
                        <img src={require('../../assets/historia.png')} alt={''}/>
                    </div>
                    <div>
                        <h1 className={'title'}>História</h1>
                        <h2 className={'subtitle'}>Toda Tradição tem uma...</h2>
                        <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam a enim non massa vehicula aliquam. Suspendisse potenti.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Mauris volutpat sed est id sollicitudin. Nunc metus dolor,
                            tristique in imperdiet eu, dictum sed quam. Aliquam finibus condimentum metus,
                            cursus vulputate neque mollis ac. Nam rhoncus a lectus eu placerat.
                            Donec faucibus justo non consequat commodo. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Historia.propTypes = {}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Historia)