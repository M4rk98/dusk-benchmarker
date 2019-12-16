import React, {useState} from 'react';
import BenchMarker from "../pages/benchmarker/BenchMarker";
import {ThemeProvider} from '@material-ui/core/styles';
import {MainTheme} from "../theme/MainTheme";
import NavigationTop from "../layout/NavigationTop";
import BenchMarkDetails from "../pages/benchmark_details/BenchMarkDetails";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {getBenchMarkData} from "../resources/BenchMarkData";

function App() {
    const [data, setData] = useState(getBenchMarkData());

    return (
        <ThemeProvider theme={MainTheme}>
            <Router>
                <NavigationTop>
                    <Switch>
                        <Route path="/:reference_id/:job_id">
                            <BenchMarkDetails data={data} />
                        </Route>
                        <Route exact path="/">
                            <BenchMarker data={data} />
                        </Route>
                    </Switch>
                </NavigationTop>
            </Router>

        </ThemeProvider>
    );
}

export default App;
