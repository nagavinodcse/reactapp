import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
class Login extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    formSubmit(){
        axios.post('/users/login',this.state).then(()=>{
            location.href = '/users';
        }).catch((error)=>{
            this.props.notify('danger',error.response.data.message);
        });
    }
    render() {
        return(
            <Container>
                <section className="form-gradient">
                    <div className="d-flex justify-content-center align-items-center p-0 full-height">
                        <Card className="p-0 col-12 col-sm-7">
                            <div className="header pt-3 peach-gradient">
                                <Row className="d-flex justify-content-center">
                                    <h3 className="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
                                </Row>
                                {/*<Row className="mt-2 mb-3 d-flex justify-content-center">
                                    <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg" /></a>
                                    <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg" /></a>
                                    <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg" /></a>
                                </Row>*/}
                            </div>
                            <CardBody className="mx-4 mt-4 p-0">
                                <Input label="Email" value={this.state.email} onBlur={this.handleChange} name="email" group type="email" validate />
                                <Input label="Password" value={this.state.password} onBlur={this.handleChange} group name="password" type="password" validate containerClass="mb-0"/>
                                <div className="d-flex align-items-center mb-4 mt-3">
                                    <div className="d-flex align-items-start">
                                        <div className="text-center">
                                            <Button color="grey" onClick={this.formSubmit.bind(this)} rounded type="button" className="z-depth-1a ml-0">Log in</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </Container>
        );
    }
};
export default Login;