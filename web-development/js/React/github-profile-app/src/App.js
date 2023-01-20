import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import { About } from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  //If you want to fire off a request when the app loads up, componentDidMount
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get('https://api.github.com/users')
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false})
  }

  clearUsers = (e) => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: {msg: msg, type: type}});
    setTimeout(() => this.setState({ alert: null}), 4000)
  }

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/user/${username}`
    );
    console.log(res.data)
    this.setState({ user: res.data, loading: false });
  }

  render () {  
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar title="GvDev Github Finder"/>
          </header>
          <div className='container'>
            <Alert alert={this.state.alert}/>
            <Routes>
              <Route exact path='/' element={
                <>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={ this.state.users.length > 0 ? true : false }
                    setAlarm={this.setAlert}
                  />
                  <Users loading={this.state.loading} users={this.state.users}/>
                </>
              } />
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/user/:login' element={
                <User {...this.props } getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
              } />
            </Routes>

          </div>
        </div>
      </Router>
    );
  }

}

export default App;
