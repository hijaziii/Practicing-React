/* eslint-disable no-unreachable */
// import  Form  from "@rjsf/core";
import Form from 'react-jsonschema-form';
import React from 'react'


function JschemaForm() {
    // const { default: Form } = JSONSchemaForm;
    const schema = {
        type: "object",
        properties: {
            Email: {
                type: "string",

            },
            Name: {
                type: "string",

            },
            Message: {
                type: "string",



            }
        },
        required: [
            " Email",
            "Name",
            "Message"
        ]
    };


    return (
        <>
            <h1>hello</h1>
            <Form schema={schema} />
        </>
    )
}

export default JschemaForm




