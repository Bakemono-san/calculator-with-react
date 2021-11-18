import react,{Component} from "react";
import { ThemeContext } from "./ThemesContext";

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const {toggleTheme} = this.context;
        return ( 
            <button onClick={toggleTheme}>Toggle the screen Theme</button>
         );
    }
}
 
export default ThemeToggle;