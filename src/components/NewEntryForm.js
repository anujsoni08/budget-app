import React from "react";
import { Form } from "semantic-ui-react";

import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = (params) => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
        ></Form.Input>
        <Form.Input
          icon="rupee"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder="100.00"
        ></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;