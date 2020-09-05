import React from "react"
import ReactDOM from "react-dom"

import "antd/dist/antd.css"
import "./style/style.css"

function App() {

    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}

const rootElement = document.getElementById("app")
ReactDOM.render(<App />, rootElement)