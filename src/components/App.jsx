import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { Button, ToastContainer, toast } from 'mdbreact';
const store = createStore(()=>[],{},applyMiddleware());
class App extends React.Component{
    notify(type,msg){
        return () => {
            switch (type) {
                case 'info':
                    toast.info(msg, {
                        autoClose: 3000
                    });
                    break;
                case 'success':
                    toast.success(msg, {
                        position: "top-right",
                    });
                    break;
                case 'warning':
                    toast.warn(msg);
                    break;
                case 'error':
                    toast.error(msg);
                    break;
            }
        };
    };
    render(){
        return (
            <Provider store={store}>
                <div className='col-12 row'>
                    <div className='col-sm-12 col-md-6 bg-indigo full-height'><SignUp notify={this.notify}/></div>
                    <div className='col-sm-12 col-md-6 full-height'><Login notify={this.notify}/></div>
                </div>
            </Provider>
        )
    }
}
export default App;