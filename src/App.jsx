import React from "react";

import './assets/css/App.scss'

import Header from "./Layout/Header.jsx";
import Body from "./Layout/Body.jsx";

class App extends React.Component {
    state = {
        height: 0,
        width: 0
    }

    resize = (event) => {
        console.log(event.target.innerHeight, event.target.innerWidth)
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        return (
            <>
                <Header></Header>
                <Body></Body>
            </>
        )
    }
}

export default App
