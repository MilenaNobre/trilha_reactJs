import './App.css'
import React, {useState} from 'react'
import { BrowserRouter } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, {data} from "../Data/DataContext";
import Store from "../Data/Store";

const App = props => {
    const [state, setState] = useState(data) // não é o melhor cenário

    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                <div className="App">
                    <BrowserRouter>
                        <Menu />
                        <Content />
                    </BrowserRouter>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App