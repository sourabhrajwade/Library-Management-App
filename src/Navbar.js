/* eslint-disable jsx-a11y/accessible-emoji */
import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";

import {withStyles} from "@material-ui/core/styles";
import {ThemeContext} from './contexts/ThemeContext';
import styles from "./styles/NavBarStyles";

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const {isDarkMode, toggleTheme } = this.context;
        const { classes } = this.props;
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
                           <InputBase classes={{
                               root: classes.inputRoot,
                               input: classes.InputInput
                           }}/>
                        </div>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>🇮🇳</span>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default withStyles(styles) (Navbar);