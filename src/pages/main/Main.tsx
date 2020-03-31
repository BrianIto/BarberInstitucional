import * as React from 'react'
import {connect} from 'react-redux'
import {Actions} from "../redux/Actions/actions"
import "./Main.sass"
import Rellax from "rellax"
import ScrollOut from 'scroll-out'
import Topbar from "../components/topbar"
import Overflow from "../components/overflow/overflow"
import "./Main.sass"

const Background = () => (
    <img src={require('../../assets/background.png')} className={'background'}/>
)


const MainPage = props => {
    React.useEffect(() => {
        new Rellax('.rellax')
        props.setOpened(true)
        ScrollOut()
    })

    return (
        <div className={"container"}>
            <Background />
            <Topbar/>
            <div className={'content rellax'}  data-rellax-speed={7}>
                <h2>Tradição e Excelência em</h2>
                <h1>Barbearia</h1>
                <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam a enim non massa vehicula aliquam. Suspendisse potenti.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Mauris volutpat sed est id sollicitudin. Nunc metus dolor,
                    tristique in imperdiet eu, dictum sed quam. Aliquam finibus condimentum metus,
                    cursus vulputate neque mollis ac. Nam rhoncus a lectus eu placerat.
                    Donec faucibus justo non consequat commodo. </p>
                <button>Agendar Visita</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    opened: state.general.opened,
})
const mapDispatchToProps = dispatch => ({
    setOpened: opened => dispatch({type: Actions.setOpened, payload: opened}),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)