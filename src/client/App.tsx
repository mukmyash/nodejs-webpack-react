
import * as React from 'react'
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import MainRouting from './routings'
import './styles/bootstrap.scss'

interface AppProps {
    history: History;
}

const App = ({ history }: AppProps) => {
    return (
        <ConnectedRouter history={history}>
            <MainRouting />
        </ConnectedRouter>
    )
}

export default App