import React, {memo} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {useStyles} from "./style";
import {useHistory} from "react-router-dom";
import Logo from '../resources/Logo-ai.svg'

function NavigationTop({children}) {
    const classes = useStyles();
    const history = useHistory();

    function render() {
        return (
            <div className={classes.layoutWrapper}>
                <CssBaseline />
                {renderHeader()}
                {renderMain()}
                {renderFooter()}
            </div>
        )
    }

    function renderHeader() {
        return (
            <AppBar position="relative">
                <Toolbar>
                    <Container maxWidth="lg">
                        <div
                            onClick={() => history.replace('/')}
                            style={{cursor: 'pointer'}}
                        >
                            <Typography
                                variant="h1"
                                color="inherit"
                                noWrap
                                className={classes.headerText}
                            >
                                <img
                                    alt={'logo'}
                                    src={Logo}
                                    className={classes.logo}
                                />
                                Benchmarking platform
                            </Typography>
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        )
    }

    function renderMain() {
        return (
            <main className={classes.mainWrapper}>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Typography variant={'h6'} className={classes.breadcrumb}>
                            Dusk network
                            {history.location.pathname}
                        </Typography>
                        {children}
                    </Container>
                </div>
            </main>
        )
    }

    function renderFooter() {
        return (
            <footer className={classes.footer} />
        )
    }

    return render();
}

export default memo(NavigationTop);