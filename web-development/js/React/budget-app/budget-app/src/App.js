import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import AccountBalance from './components/AccountBalance';
import EntryLine from './components/EntryLine';

function App() {

  return (
    <Container>
      <MainHeader title="GvDev Budget App" textAlign='center'/>

      <AccountBalance title='Your Balance: ' value='1,111.11'/>

      <DisplayBalance />

      <MainHeader title='History' type='h3' textAlign='left'/>

      <EntryLine item='Fast Food' amount='10.00' isExpense/>
      <EntryLine item='App completion' amount='50,000.00' />
      <MainHeader title='Add Transaction' type='h3' />
      <NewEntryForm />
    </Container>
  );
}

export default App;
