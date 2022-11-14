import React from "react";

// reactstrap components
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import { thead2, tbody2 } from "variables/general";

function Transactions() {
    return (
        <>
            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Simple Table</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            {thead2.map((prop, key) => {
                                                if (key === thead2.length - 1)
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
                                        {tbody2.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {prop.data.map((prop, key) => {
                                                        if (key === thead2.length - 1)
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

export default Transactions;
