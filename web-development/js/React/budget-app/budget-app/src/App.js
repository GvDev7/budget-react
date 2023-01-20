import { Container } from 'semantic-ui-react';
import { useState } from 'react';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import AccountBalance from './components/AccountBalance';
import EntryLines from './components/EntryLines';

function App() {
  var InitialEntries = [
    {
      item:'Work income',
      amount:'2000.00',
      isExpense: false,
      id: 1
    }, {
      item: 'Water Bill',
      amount: '100.00',
      isExpense: true,
      id: 2
    },
    {
      item:"Rent",
      amount: '800.70',
      isExpense: true,
      id: 3
    }
  ]  
  const [entries, setEntries] = useState(InitialEntries);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="GvDev Budget App" textAlign='center'/>

      <AccountBalance title='Your Balance: ' value='1,111.11'/>

      <DisplayBalance />

      <MainHeader title='History' type='h3' textAlign='left'/>

      <EntryLines entries={entries} deleteEntry={deleteEntry}/>

      <MainHeader title='Add Transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
