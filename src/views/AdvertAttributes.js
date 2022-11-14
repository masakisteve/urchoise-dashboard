/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function AdvertAttributes() {
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Advertisement Attributes</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <FormGroup>
                                                <label>Attribute Name</label>
                                                <Input


                                                    placeholder="Attribute Name"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <FormGroup>
                                                <label>Attribute Data type</label>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle caret size="sm" style={{ 'padding-right': "50px", 'padding-left': "50px" }} t>
                                                        Select
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Buy and Sell</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Attribute Values</label>
                                                <Input
                                                    // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                    placeholder="Attribute Values"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <FormGroup>
                                                <label>Category</label>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle caret size="sm" style={{ 'padding-right': "50px", 'padding-left': "50px" }}>
                                                        Categories
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Buy and Sell</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <FormGroup>
                                                <label>Sub Category</label>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle caret size="sm" style={{ 'padding-right': "50px", 'padding-left': "50px" }}>
                                                        Categories
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Buy and Sell</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label>Sub sub Category</label>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle caret size="sm" style={{ 'padding-right': "50px", 'padding-left': "50px" }}>
                                                        Categories
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem>Buy and Sell</DropdownItem>
                                                        <DropdownItem>Another Action</DropdownItem>
                                                        <DropdownItem>Something else here</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <Button color="primary" className="btn-round">Add</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}

export default AdvertAttributes;
