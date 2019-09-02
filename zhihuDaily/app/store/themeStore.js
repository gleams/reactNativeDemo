import { action, observable } from "mobx";
import DefaulTheme from '../theme/defaultTheme';
import BlackTheme from '../theme/blackTheme';

class ThemeStore {
    constructor() {
        this.colors = DefaulTheme;
    }

    @observable colors;

    @action
    switchTheme( type ) {
        if ( this.colors.themeType === 'default' ) {
            this.colors = BlackTheme;
        } else if ( this.colors.themeType === 'black' ) {
            this.colors = DefaulTheme;
        }
    }
}

const theme = new ThemeStore();
export { theme }
