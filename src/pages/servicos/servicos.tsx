import React from 'react'
import {connect} from 'react-redux'
import "./servicos.sass"
import ScrollOut from 'scroll-out'
const Servicos = props => {

    React.useEffect(() => {
        ScrollOut()
    })

 return (
    <div className={'servicos_container'} id={"servicos"} data-scroll>
        <h1>Serviços</h1>
        <div className={'divider'}>
            <div>
                <h2>Cortes</h2>
                <h3>Nosso talento a disposição.</h3>
                <table>
                    <tr>
                        <td>Corte de Cabelo Social</td>
                        <td>R$20,00</td>
                    </tr>
                    <tr>
                        <td>Corte de Cabelo Degradê</td>
                        <td>R$20,00</td>
                    </tr>
                    <tr>
                        <td>Cabelo & Barba</td>
                        <td>R$27,50</td>
                    </tr>
                    <tr>
                        <td>Cabelo, Sobrancelha & Barba</td>
                        <td>R$5,00</td>
                    </tr>
                </table>
            </div>
            <div>
                <h2>Tratamentos</h2>
                <h3>Para melhor cuidar de você.</h3>
                <table>
                    <tr>
                        <td>Corte de Cabelo</td>
                        <td>R$5,00</td>
                    </tr>
                    <tr>
                        <td>Corte de Cabelo</td>
                        <td>R$5,00</td>
                    </tr>
                    <tr>
                        <td>Corte de Cabelo</td>
                        <td>R$5,00</td>
                    </tr>
                </table>
            </div>
        </div>
        <button>Agendar Visita</button>
    </div>
 )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Servicos)