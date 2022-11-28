import { Button, ButtonGroup, ButtonOr, Container, Form, FormGroup, FormInput, Grid, GridColumn, GridRow, Header, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1' textAlign='center'>GvDev Budget App</Header>

      <Statistic size='small'>
        <StatisticLabel>Your Balance:</StatisticLabel>
        <StatisticValue>1,111.11</StatisticValue>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Statistic size='tiny' color='green'>
                <StatisticLabel style={{textAlign:"left"}}>
                  Income: 
                </StatisticLabel>
                <StatisticValue>
                  7,400
                </StatisticValue>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size='tiny' color='red'>
                <StatisticLabel>
                  Expenses:
                </StatisticLabel>
                <StatisticValue>
                  2,151.90
                </StatisticValue>
              </Statistic>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn textAlign='left' width={10}>Fast Food</GridColumn>
            <GridColumn width={3}>$10.00</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' />
              <Icon name='trash'/>
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as='h3'>Add Transaction</Header>
      <Form unstackable>
        <FormGroup>
          <FormInput placeholder='What did you buy?...' icon='tags' width={10} label='Description' />
          <FormInput label='Value' placeholder='100.00' icon='dollar' iconPosition='left' width={6}/>
        </FormGroup>

        <ButtonGroup style={{marginTop:20}}>
          <Button>Cancel</Button>
          <ButtonOr/>
          <Button primary>Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
