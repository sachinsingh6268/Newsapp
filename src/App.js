import { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends Component {
  pageSize = 12;
  country = 'in'
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route exact path='/' element={<NewsComponent key="home" pageSize={this.pageSize} country={this.country} category='general' />}/>
            <Route exact path='/general' element={<NewsComponent key="general" pageSize={this.pageSize} country={this.country} category='general' />}/>
            <Route exact path='/sports' element={<NewsComponent key="sports" pageSize={this.pageSize} country={this.country} category='sports' />}/>
            <Route exact path='/science' element={<NewsComponent key="science" pageSize={this.pageSize} country={this.country} category='science' />}/>
            <Route exact path='/technology' element={<NewsComponent key="technology" pageSize={this.pageSize} country={this.country} category='technology' />}/>
            <Route exact path='/entertainment' element={<NewsComponent key="entertainment" pageSize={this.pageSize} country={this.country} category='entertainment' />}/>
            <Route exact path='/health' element={<NewsComponent key="health" pageSize={this.pageSize} country={this.country} category='health' />}/>
            <Route exact path='/business' element={<NewsComponent key="business" pageSize={this.pageSize} country={this.country} category='business' />}/>
          </Routes>
        </Router>
      </div >
    )
  }
}

export default App;
