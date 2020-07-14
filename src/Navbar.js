/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useContext} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";

import {withStyles} from "@material-ui/core/styles";
import {ThemeContext} from './contexts/ThemeContext';
import {LanguageContext} from './contexts/LanguageContext';

import styles from "./styles/NavBarStyles";
const content = {
    english: {
      search: "Search",
      flag: "🇬🇧"
    },
    french: {
      search: "Chercher",
      flag: "🇫🇷"
    },
    spanish: {
      search: "Buscar",
      flag: "🇪🇸"
    }
  };
function Navbar (props) {
    
        const { language } = useContext(LanguageContext);
        const {search, flag} = content[language];
        const {isDarkMode, toggleTheme } = useContext(ThemeContext)
        const { classes } = props;
        
        return (
            <div className="{classes.root}">
                <AppBar position="static" color={isDarkMode ? 'default': 'primary'}>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit">
                            Library Manager
                        </Typography>
                        
                        <div className={classes.grow} />
                        <Switch onChange={toggleTheme}/>
                        
                        <div className={classes.search}>
                           <div className={classes.searchIcon}>
                               <SearchIcon />
                           </div>
                           <InputBase placeholder={`${search}...`}
                           classes={{
                               root: classes.inputRoot,
                               input: classes.InputInput
                           }}/>
                        </div>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>{flag}</span>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    
}

export default withStyles(styles) (Navbar);