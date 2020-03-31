import React, {useRef} from 'react'
import MainPage from "./pages/main/Main"
import {Provider} from "react-redux"
import Store from "./pages/redux/store"
import Overflow from "./pages/components/overflow/overflow"
import Historia from "./pages/historia/historia"
import Servicos from "./pages/servicos/servicos"
import Contato from "./pages/contato/contato"
import ScrollUpButton from 'react-scroll-up-button'
import Equipe from "./pages/equipe/equipe"
import Footer from "./pages/footer/footer"

function App() {

    const AppContainer = useRef(null)
    const OnScroll = () => console.log(AppContainer.current.scrollTop)

    return (
        <Provider store={Store}>
            <div className="App" onScroll={OnScroll} ref={AppContainer}>
                <Overflow />
                <MainPage/>
                <Historia />
                <Servicos />
                <Contato/>
                <Equipe />
                <Footer />
                <ScrollUpButton />
            </div>
        </Provider>
    )
}

export default App
