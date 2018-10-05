import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
const store = createStore(()=>[],{},applyMiddleware)

class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <div className='col-12 row'>
                    <div className='col-sm-12 col-md-6 bg-indigo full-height'><SignUp/></div>
                    <div className='col-sm-12 col-md-6 full-height'><Login/></div>
                </div>
            </Provider>
        )
    }
}
export default App;