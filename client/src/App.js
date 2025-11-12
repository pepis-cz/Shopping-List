import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ShoppingList from './Components/shopping-list/shopping-list';

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
        id: 'x',
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
        id: 'y',
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
      <ShoppingList users = {InitialData.users} shopL = {InitialData.shopLists[0]} userId = {InitialData.userId}/>
    </>
  );
}

export default App;
