import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

import { initialState, reducer } from  '../../store/index'
import { numberAdd2, login } from "../../store/actions";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="STATE NUMBER"/>
            <div className="center">
                <span className="text">{ state.number }</span>
            </div>

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                { state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>

                }
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Milena')}> Login </button>
                    <button className="btn" onClick={() => numberAdd2(dispatch) }>+2</button>
                </div>
            </div>
            <SectionTitle title="Desafio #01" />
            <div className="center">
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'numberMulti7'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDiv25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberInt'})}>INT</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd', payload: 100})}>ADD</button>
                </div>

            </div>

        </div>
    )
}

export default UseReducer
