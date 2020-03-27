import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Layout
import Layout from './Layout';
import FullScreenLayout from './FullScreenLayout';
// Statistics
import DashboardPage from '../page/DashboardPage';
// Risk Ranking
import RiskRankingPage from '../page/RiskRankingPage';
// Not Found Page
import NotFoundPage from '../page/NotFoundPage';
// Loading Page
import LoadingPage from '../page/LoadingPage';
// Manager
import LocalStorageManager from 'manager/LocalStorageManager';
// Theme
import StickyBoardThemes from 'theme/StickyBoardThemes';
// Constants
import LocalStorageConst from 'constants/LocalStorageConst';

const themeKeys = Object.keys(StickyBoardThemes);

class App extends React.Component {
    constructor(props) {
        super(props);

        const initialThemeKey = LocalStorageManager.getItem(
            LocalStorageConst.KEY.THEME_KEY,
            themeKeys[0]
        );
        const initialTheme =
            StickyBoardThemes[initialThemeKey] ||
            StickyBoardThemes[themeKeys[0]];

        this.state = {
            selectedThemeKey: initialThemeKey,
            muiTheme: createMuiTheme(initialTheme),
        };
    }

    onThemeChange = (themeKey) => {
        const selectedTheme = StickyBoardThemes[themeKey];

        this.setState(
            {
                selectedThemeKey: themeKey,
                muiTheme: createMuiTheme(selectedTheme),
            },
            () => {
                LocalStorageManager.setItem(
                    LocalStorageConst.KEY.THEME_KEY,
                    themeKey
                );
            }
        );
    };

    render() {
        const { selectedThemeKey, muiTheme } = this.state;

        return (
            <MuiThemeProvider theme={muiTheme}>
                <Router>
                    <Switch>
                        <Route path="/NotFoundPage">
                            <FullScreenLayout path="/NotFoundPage">
                                <Route
                                    path="/NotFoundPage"
                                    component={NotFoundPage}
                                />
                            </FullScreenLayout>
                        </Route>
                        <Route path="/">
                            <Layout
                                themeKeys={themeKeys}
                                selectedThemeKey={selectedThemeKey}
                                onThemeChange={this.onThemeChange}>
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        render={() => {
                                            return <Redirect to="/Welcome" />;
                                        }}
                                    />
                                    {/*Statistics*/}
                                    <Route
                                        exact
                                        path="/statistics/dashboard"
                                        render={() => <DashboardPage />}
                                    />
                                    <Route
                                        exact
                                        path="/statistics/risk_ranking"
                                        render={() => <RiskRankingPage />}
                                    />
                                    {/*404 Error*/}
                                    <Route
                                        path="*"
                                        render={() => {
                                            return (
                                                <Redirect to="/NotFoundPage" />
                                            );
                                        }}
                                    />
                                </Switch>
                            </Layout>
                        </Route>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
