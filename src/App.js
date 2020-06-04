import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Admin from './Pages/admin.component';
import Login from './Pages/login.component';
import { AuthProvider } from './firebase/Auth';
import PrivateRoute from './firebase/private-route';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Admin}/>
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;