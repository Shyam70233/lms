import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Header from './comp/Header'
import Footer from './comp/Footer'
import Login from './Login'
import Admin from './admin'
import Fcaulty from './faculty'
import Student from './student'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <>
        <Header />
          <div className='conatiner'>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Admin/:x" component={Admin}/>
              <Route exact path="/Fcaulty/:x" component={Fcaulty}/>
              <Route exact path="/Student/:x" component={Student}/>
            </Switch>
          </div>
        <Footer />
        <ToastContainer />
        </>
    </BrowserRouter>
    </>
  )
}

export default App
