import React, { useState } from 'react';
import { Form, FormGroup, FormInput } from 'semantic-ui-react';
import ButtonSave from './Button';

function NewEntryForm() {
  const [state, setState] = useState()
  return (
    <Form unstackable>
        <FormGroup>
            <FormInput placeholder='What did you buy?...' icon='tags' width={10} label='Description' />
            <FormInput label='Value' placeholder='100.00' icon='dollar' iconPosition='left' width={6}/>
        </FormGroup>

        <ButtonSave/>
    </Form>
  )
}

export default NewEntryForm