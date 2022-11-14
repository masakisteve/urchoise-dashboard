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
    CardTitle,
    Table
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { thead, tbody } from "variables/general";

function Packages() {
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Add Package</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <FormGroup>
                                                <label>Company (disabled)</label>
                                                <Input
                                                    defaultValue="Creative Code Inc."
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input
                                                    defaultValue="michael23"
                                                    placeholder="Username"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Input placeholder="Email" type="email" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <FormGroup>
                                                <label>First Name</label>
                                                <Input
                                                    defaultValue="Mike"
                                                    placeholder="Company"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <FormGroup>
                                                <label>Last Name</label>
                                                <Input
                                                    defaultValue="Andrew"
                                                    placeholder="Last Name"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input
                                                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                    placeholder="Home Address"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <FormGroup>
                                                <label>City</label>
                                                <Input
                                                    defaultValue="Mike"
                                                    placeholder="City"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <FormGroup>
                                                <label>Country</label>
                                                <Input
                                                    defaultValue="Andrew"
                                                    placeholder="Country"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label>Postal Code</label>
                                                <Input placeholder="ZIP Code" type="number" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>About Me</label>

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Current Packages</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                    <tr>
                                        {thead.map((prop, key) => {
                                            if (key === thead.length - 1)
                                                return (
                                                    <th key={key} className="text-right">
                                                        {prop}
                                                    </th>
                                                );
                                            return <th key={key}>{prop}</th>;
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tbody.map((prop, key) => {
                                        return (
                                            <tr key={key}>
                                                {prop.data.map((prop, key) => {
                                                    if (key === thead.length - 1)
                                                        return (
                                                            <td key={key} className="text-right">
                                                                {prop}
                                                            </td>
                                                        );
                                                    return <td key={key}>{prop}</td>;
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Row>
            </div>
        </>
    );
}

export default Packages;
