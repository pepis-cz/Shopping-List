import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './Components/home-page/dashboard';

function App() {

  const InitialData = {
    users: [
      {
        id: '1',
        email: 'a@seznam.cz'
      },
      {
        id: '2',
        email: 'b@gmail.com'
      },
      {
        id: '3',
        email: 'c@seznam.cz'
      },
      {
        id: '4',
        email: 'd@gmail.com'
      }
    ],
  
    shopLists: [
      {
        id: '0',
        title: 'list',

        items: [
          {
            id: '1',
            name: 'key',
            status: true
          },
          {
            id: '2',
            name: 'value',
            status: false
          }
        ],

        owner: '2',
        members: ['2', '1'],
        archived: true
      },
      {
        id: '1',
        title: '',

        items: [
        ],

        owner: '3',
        members: ['3', '2'],
        archived: false
      }
    ],

    userId: '2'
  }

  return (
    <>
      <Dashboard users = {InitialData.users} shopLists = {InitialData.shopLists} userId = {InitialData.userId}/>
    </>
  );
}

export default App;
