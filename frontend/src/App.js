import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/pages/Login';
import Museums from './components/pages/Museums';
import Map from './components/pages/Map';
import AR_VR from './components/pages/AR_VR';
import AR from './components/pages/AR';
import Reset from './components/pages/Reset';
import Languages from './components/pages/Languages';
import Options from './components/pages/Options';
// import PrivateRoute from './components/shared/PrivateRoute';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/museums" component={Museums} />
                    <Route exact path="/map" component={Map} />
                    <Route exact path="/arvr" component={AR_VR} />  
                    <Route exact path="/ar" component={AR} />  
                    <Route exact path="/reset" component={Reset} />
                    <Route exact path="/languages" component={Languages} />
                    <Route exact path="/options" component={Options} />
                    
                    {/* <PrivateRoute exact path="/login/museums">
                        <Museums />
                    </PrivateRoute> 
                    <PrivateRoute path="/login/map">
                        <Map />
                    </PrivateRoute>
                    <PrivateRoute path="/login/arvr">
                        <AR_VR />
                    </PrivateRoute>
                    <PrivateRoute path="/login/ar">
                        <Route exact path="/ar" component={AR} /> 
                    </PrivateRoute>
                    <PrivateRoute path="/login/reset">
                        <Reset />
                    </PrivateRoute>
                    <PrivateRoute path="/login/languages">
                        <Languages />
                    </PrivateRoute>
                    <PrivateRoute path="/login/options">
                        <Options />
                    </PrivateRoute> */}
                
                    <Redirect from="*" to="/login" />
                </Switch> 
            </BrowserRouter>
        </div>
    );
}

export default App;
