import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  TabContent, TabPane, Card, Button, CardTitle, CardText, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, 
  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
// import Modal from 'react-modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      activeTab: '1',
      modal: false,
    };
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="App">
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Company Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">x POLY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
        <Row>
          <Col sm="9" style={{textAlign:'left', padding:'20px'}}>
            <h2>ACME STO</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col sm="3" style={{paddingTop:'50px'}}>
            <Button color="primary" onClick={()=>{this.toggleModal()}}>Invest in ACME's STO</Button>
          </Col>
          </Row>
          <Row>
            <Col sm="12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Company Background
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Offering Description
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Management Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  Timelines
                </NavLink>
              </NavItem>
            </Nav>
            

            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="9" style={{ padding:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Col>
                  <Col sm="3">
                  <img src="https://via.placeholder.com/300x300?text=Polymath" />
                  </Col>
                  
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="9" style={{ padding:'20px'}}>
                    <p>Tab 2</p>
                  </Col>
                  <Col sm="3">
                    <img src="https://via.placeholder.com/300x300?text=Polymath" />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="9" style={{ padding:'20px'}}>
                    <p>Tab 3</p>
                  </Col>
                  <Col sm="3">
                    <img src="https://via.placeholder.com/300x300?text=Polymath" />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col sm="9" style={{ padding:'20px'}}>
                    <p>Tab 4</p>
                  </Col>
                  <Col sm="3">
                    <img src="https://via.placeholder.com/300x300?text=Polymath" />
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
            </Col>
            

          </Row>
          
        </Container>
        
        
        
        <Modal isOpen={this.state.modal} toggle={()=>{this.toggleModal()}} className={this.props.className}>
          <ModalHeader toggle={()=>{this.toggleModal()}}>Create an investor account</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter a valid email address" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Choose Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Choose a password" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Jurisdiction(s)</Label>
              <Input type="select" name="selectMulti" id="exampleSelectMulti">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Investor Entity</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Investor Entity" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Investor Status</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Investor Status" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">More information</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            
            <Button color="danger" onClick={()=>{this.toggleModal()}}>Cancel</Button>
            <Button color="primary" onClick={()=>{this.toggleModal()}}>Confirm</Button>
          </ModalFooter>
        </Modal>     

      </div>
    );
  }
}

export default App;
