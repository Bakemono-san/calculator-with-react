import { ThemeContext } from './ThemesContext';
import React, {Component} from 'react';

class ResultComponent extends Component {
    static contextType = ThemeContext
    render() {
        console.log(this.context);
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;
        let {result} = this.props;
        return (
            <div className="result" style={{background: theme.bg,color: theme.syntax}}>
                <input type="text" value={result} style={{color: theme.syntax}} />
            </div>
    )
        ;
    }
}


export default ResultComponent;