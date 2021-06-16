import React from 'react'
// import { hashHistory, Router, Route, IndexRoute } from 'react-router'
// import { Route, HashRouter, Router } from 'react-router-dom'

// import App from '../views/App'
import home from '../views/home/index'
import series from '../views/series/index'

import Title from '../components/title'
import Bottom from '../components/bottom'
// import * as about from '../views/about'
// let myrouter = (
//   <Router history={HashRouter}>
//     <Route path="/" component={App}>
//       {/* <IndexRoute component={home.index} /> */}
//       <Route path="/about" component={home}></Route>
//     </Route>
//   </Router>
// )

// export default myrouter

// import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


const BasicRoute = () => (
  <BrowserRouter>
    <Title />
    <Switch>
      <Route exact path="/" render={() => (<Redirect to="/home" />)} />
      <Route path="/home" component={home} />
      <Route path="/series" component={series} />
    </Switch>
    <Bottom />
  </BrowserRouter>
);


export default BasicRoute;