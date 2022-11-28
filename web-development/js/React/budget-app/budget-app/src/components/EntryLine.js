import React from 'react';
import { Segment, Grid, GridColumn, GridRow, Icon} from 'semantic-ui-react';

function EntryLine({ item, amount, isExpense }) {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign="right">
            <GridRow>
                <GridColumn textAlign='left' width={10}>{item}</GridColumn>
                <GridColumn width={3}>${amount}</GridColumn>
                <GridColumn width={3}>
                    <Icon name='edit' />
                    <Icon name='trash'/>
                </GridColumn>
            </GridRow>
        </Grid>
    </Segment>
  )
}

export default EntryLine