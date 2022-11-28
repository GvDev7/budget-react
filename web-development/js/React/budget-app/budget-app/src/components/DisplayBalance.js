import React from 'react';
import { Segment, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import AccountBalance from './AccountBalance';

function DisplayBalance() {
  return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
            <GridRow>
                <GridColumn>
                    <AccountBalance title='Income: ' value='7400.00' color='green' />
                </GridColumn>
                <GridColumn>
                    <AccountBalance title='Expenses: ' value='2,151.90' color='red' />
                </GridColumn>
            </GridRow>
        </Grid>
    </Segment>
  )
}

export default DisplayBalance