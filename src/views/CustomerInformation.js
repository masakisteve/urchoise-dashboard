import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Table } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead, tbody } from "variables/general";

function CustomerInformation() {
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col md={12}>
                        <Card>
                            <CardHeader>
                                <h5 className="title">Customer Information</h5>
                                <p className="category">
                                    Customer retention, acquisitions and user functions.
                                </p>
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
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default CustomerInformation;
