import React, { Component } from 'react';
import { Container, Grid, Input, Form, Header } from 'semantic-ui-react';

const style = {
  gridStyle: {
    marginTop: '5rem'
  },
  colStyle: {
    width: '500px'
  },
  container: {
    width: '100%'
  },
  header: {
      marginBottom: '-2rem'
  }
};

class InputScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header style={style.header} as="h1" textAlign="center" dividing>New Hope Title Quote</Header>
        <Container alignContent="center" style={style.container}>
          <Grid centered columns={3} style={style.gridStyle}>
            <Grid.Row>
              <Grid.Column style={style.colStyle}>
                <Form size="mini">
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column style={style.colStyle}>
                <Form size="mini">
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                </Form>
              </Grid.Column>
              <Grid.Column style={style.colStyle}>
                <Form size="mini">
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                  <Form.Field>
                    <label>First Input</label>
                    <input placeholder="$500.00" />
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default InputScreen;
