import React from 'react';
import { Form } from "react-bootstrap";

export default function DropdownMenusQuality(props) {
    const data = props.data;
    let relList = [];
    for (var i = 0; i < data.length; i++) {
        relList.push(data[i]["release"]);
    }
    return (
        <Form inline>
            <Form.Label
                className="col-sm-3"
                htmlFor="inlineFormCustomSelectPref"
            >
                Release     :
            </Form.Label>
            <Form.Control
                as="select"
                className="col-sm-5"
                id="inlineFormCustomSelectPref"
                custom
                onChange={props.onChange}
            >
                {relList.map((release,index) => (
                    <option key={index} value={release}>{release}</option>
                ))}
            </Form.Control>
        </Form>
    );
}
