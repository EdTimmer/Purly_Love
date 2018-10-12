import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
// import Gallery from './Gallery';
import GalleryGrid from './GalleryGrid';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/gallerygrid" component={GalleryGrid} />
            {/*<Route exact path="/gallery" component={ Gallery } />*/}
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
