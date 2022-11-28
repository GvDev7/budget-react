import React from 'react';
import { Header } from 'semantic-ui-react'

function MainHeader({ title, type = 'h1', textAlign}) {
  return <Header as={type} textAlign={textAlign}>{title}</Header>;

}

export default MainHeader