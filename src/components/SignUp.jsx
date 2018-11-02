import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
class SignUp extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            name:'',
            retype_password:''
        };
        this.baseState = this.state;
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    formSubmit(){
        axios.post('/users/register',this.state).then((result)=>{
            this.props.notify('success','You are Successfully Registered..!');
            this.setState(this.baseState);
        });
    }
    render() {
        return(
            <Container>
                <section className="form-gradient">
                    <div className="d-flex justify-content-center align-items-center p-0 full-height">
                        <Card className='col-sm-7 col-12 p-0'>
                            <div className="header pt-3 peach-gradient">
                                <Row className="d-flex justify-content-center">
                                    <h3 className="white-text mb-3 pt-3 font-weight-bold">Sign Up</h3>
                                </Row>
                                {/*<Row className="mt-2 mb-3 d-flex justify-content-center">
                                    <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg" /></a>
                                    <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg" /></a>
                                    <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg" /></a>
                                </Row>*/}
                            </div>
                            <CardBody className="mx-4 mt-4 p-0">
                                <form id="signUpForm" method="post" ref="signUpForm">
                                    <Input label="Name" value={this.state.name} onBlur={this.handleChange} name="name" group type="text" validate/>
                                    <Input label="Email" value={this.state.email} onBlur={this.handleChange} name="email" group type="email" validate/>
                                    <Input label="Password" value={this.state.password} onBlur={this.handleChange} group name="password" type="password" validate/>
                                    <Input label="Retype password" value={this.state.retype_password} onBlur={this.handleChange} group name="retype_password" type="password" validate containerClass="mb-0"/>
                                    <div className="d-flex align-items-center mb-4 mt-3">
                                        <div className="d-flex align-items-start">
                                            <div className="text-center">
                                                <Button color="grey" onClick={this.formSubmit.bind(this)} rounded type="button" className="z-depth-1a ml-0">Sign Up</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </Container>
        );
    }
};

export default SignUp;