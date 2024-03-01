import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetails from './components/courseItemDetails'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/not-found" component={NotFound0} />
      <Route to="/not-found" />
    </Switch>
  </div>
)

export default App
