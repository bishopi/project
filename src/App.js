import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Games from "./components/Games/Games";


const App = (props) => {

    return (
        <div>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/games' component={Games}/>
                </div>
            </div>
        </div>
    );
};


export default App;
