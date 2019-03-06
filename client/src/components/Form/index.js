import React from "react";
import "./style.css";
import { Grid, Form, Button } from "semantic-ui-react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <Grid>
    <Form className="form-group">
      <input className="form-control" {...props} />
    </Form>
    </Grid>
  );
}

export function TextArea(props) {
  return (
    <Grid>
    <Form className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </Form>
    </Grid>
  );
}

export function FormBtn(props) {
  return (
    <Button {...props} style={{ float: "right", marginBottom: 10 }} className="btn">
      {props.children}
    </Button>
  );
}

