import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { Button, ToastContainer, toast } from 'mdbreact';
import ReactNotification from "react-notifications-component";
const store = createStore(()=>[],{},applyMiddleware());
class App extends React.Component{
    constructor(props){
        super(props);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
    }
    addNotification(type,msg){
        this.notificationDOMRef.current.addNotification({
            message: msg,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "flipInY"],
            animationOut: ["animated", "flipOutY"],
            dismiss: { duration: 5000 },
            dismissable: { click: true }
        });
    };
    render(){
        return (
            <Provider store={store}>
                <div className='col-12 row'>
                    <ReactNotification ref={this.notificationDOMRef} />
                    <div className='col-sm-12 col-md-6 bg-indigo full-height'><SignUp notify={this.addNotification}/></div>
                    <div className='col-sm-12 col-md-6 full-height'><Login notify={this.addNotification}/></div>
                </div>
            </Provider>
        )
    }
}
export default App;