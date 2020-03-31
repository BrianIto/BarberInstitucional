import React from 'react'
import {connect} from 'react-redux'
import "./footer.sass"

const Footer = props => {
 return (
    <div className={'footer_container'}>
        <div className={'content'}>
            <div className={'divider'}>
                <div>
                    <img src={require("../../assets/logo.svg")} alt={''} />
                </div>
                <div>
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

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)