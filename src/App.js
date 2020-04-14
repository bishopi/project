import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Games from "./components/Games/Games";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {

    return (
        <div>
            <div className='app-wrapper'>
                <Header/>
                <Nav />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/games' component={Games}/>
                    <Route path='/users'  render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>
    );
};


export default App;
