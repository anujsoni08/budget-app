import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = ({ title, value, color = "black", size = "tiny" }) => {
  return (
    <Segment textAlign="center">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value="1253.84" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value="623.84" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
