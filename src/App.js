import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Components/search/Search'
import Navbar from './Components/navbar/NavBar'
import './App.css';


class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <Navbar/>
          <Search/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;