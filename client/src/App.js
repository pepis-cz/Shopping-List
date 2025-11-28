import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Dashboard from './Components/home-page/dashboard';

function App() {

  const mockData = {
    users: [
      {
        _id: '0',
        email: 'a@seznam.cz'
      },
      {
        _id: '1',
        email: 'b@seznam.cz'
      },
      {
        _id: '2',
        email: 'c@seznam.cz'
      },
      {
        _id: '3',
        email: 'd@seznam.cz'
      }
    ],

    userId: '1',
  
    shopLists: [
      {
        _id: '4',
        title: 'skleník',

        items: [
          {
            _id: '5',
            name: 'pivo',
            status: false
          }
        ],

        owner: '2',
        members: ['3', '1'],

        archived: false
      }
    ]
  }

  return (
    <>
      <Dashboard users = {mockData.users} shopLists = {mockData.shopLists} userId = {mockData.userId}/>
    </>
  );
}

export default App;
