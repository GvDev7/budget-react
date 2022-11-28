import React from 'react';
import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';

function AccountBalance({ title, value, color }) {
  return (
    <Statistic size='tiny' color={color}>
        <StatisticLabel style={{textAlign:"left"}}>
            {title} 
        </StatisticLabel>
        <StatisticValue>
            {value}
        </StatisticValue>
    </Statistic>
  )
}

export default AccountBalance