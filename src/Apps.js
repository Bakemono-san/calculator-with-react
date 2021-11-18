import React, { Component } from 'react';
import KeyPadComponent from './components/keypad';
import ResultComponent from './components/result';
import ThemeContextProvider, { ThemeContext } from './components/ThemesContext';
import ThemeToggle from './components/ThemeToggle';

class Apps extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
                
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    

    render() {
        return (
            <div>
                <div className="calculator-body" >
                    <ThemeContextProvider>
                        <h1>Simple Calculator</h1>
                        <ResultComponent result={this.state.result}/>
                        <KeyPadComponent onClick={this.onClick}/>
                        <ThemeToggle />
                    </ThemeContextProvider>
                </div>
            </div>
        );
    }
}

export default Apps;