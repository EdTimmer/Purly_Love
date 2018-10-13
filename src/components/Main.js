import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './Home';
// import Gallery from './Gallery';
import GalleryGrid from './GalleryGrid';
import Hats from './Hats';
import Scarves from './Scarves';
import Sweaters from './Sweaters';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/gallery" component={GalleryGrid} />
            <Route exact path="/hats" component={Hats} />
            <Route exact path="/scarves" component={Scarves} />
            <Route exact path="/sweaters" component={Sweaters} />
            {/*<Route exact path="/gallery" component={ Gallery } />*/}
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
