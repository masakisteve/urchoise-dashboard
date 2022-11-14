import React, { useState } from 'react'

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
    ButtonToggle,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import * as FilePond from 'filepond';
import Dropdown from 'react-bootstrap/Dropdown';



function Categories() {
    const pond = FilePond.create({
        multiple: true,
        name: 'filepond'
    });
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // height: '100vh',
                }}>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Categories</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <UncontrolledDropdown>
                                        <DropdownToggle caret size="sm" style={{ 'padding-right': "50px", 'padding-left': "50px" }}>
                                            Select category to add
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Category</DropdownItem>
                                            <DropdownItem>Sub Category</DropdownItem>
                                            <DropdownItem>Sub sub Category</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <FormGroup>
                                                <label>Category Name</label>
                                                <Input

                                                    placeholder="Category Name"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>


                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="12">
                                            <FormGroup>
                                                <label>Activate</label>

                                                <ButtonToggle>

                                                </ButtonToggle>
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <label>Parent Category</label>
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

export default Categories;
