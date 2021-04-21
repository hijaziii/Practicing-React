import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTax from '../components/AddTax';
import ConfirmOrders from '../components/ConfirmOrders';
import OrderForm from '../components/OrderForm';
import { Provider } from 'react-redux';
import store from '../store/store';
import ContactForm from '../components/ContactForm/ContactForm';
import AboutPage from '../features/AboutPage/AboutPage';
import NavBar from '../components/NavBar/NavBar';
import HomePage from '../features/HomePage/HomePage';
import Login from '../redux/Users/LoginRegister/Login';
import Register from '../redux/Users/LoginRegister/Register';
import LoginRegisterPage from '../redux/Users/LoginRegister/LoginRegister';

const App = () => {
  const initialState = { color: 'blue', data: [] };
  const [appState, setAppState] = useState(initialState)

  return (

    <Provider store={store}>
      <Router>

        <NavBar />
        <div>
          <Switch >
            <Route exact path='/aboutpage'>
              <AboutPage>
                <ContactForm />
              </AboutPage>
            </Route>

            <Route exact path='/login'>
              <LoginRegisterPage
                login={<Login />}
                register={<Register />} />
            </Route>

            {/* <Route exact path='/register' component={Register} /> */}

            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/login' component={Login} /> */}




            <OrderForm
              setAppState={setAppState} // setAppSate is to change
              orderFormAppstate={appState} // appSate is to show
            />
            <ConfirmOrders
              setAppState={setAppState}
              confirmOrdersState={appState}
            />
            <AddTax
              setAppState={setAppState}
              addTaxAppState={appState}

            />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App







