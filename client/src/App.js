import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingListProvider from './Components/provider/sList';
import './App.css';

import Dashboard from './Components/home-page/dashboard';

function App() {

  const mockData = {
    users: [
      {
        _id: 'c1f11786edcdf552252ab3d2',
        email: 'a@seznam.cz'
      },
      {
        _id: '955d09a81bdbe845fc885265',
        email: 'b@seznam.cz'
      },
      {
        _id: 'd97bf1427de1ae849b844e5e',
        email: 'c@seznam.cz'
      },
      {
        _id: '949812cbe22c784c4de72bde',
        email: 'd@seznam.cz'
      }
    ],

    userId: 'd97bf1427de1ae849b844e5e',
  
    shopLists: [
      {
        _id: '94f7bca7e158fa2d347b6385',
        title: 'skleník',

        items: [
          {
            _id: 'cb3f69843ea2906109230915',
            name: 'pivo',
            status: false
          }
        ],

        owner: '949812cbe22c784c4de72bde',
        members: ['949812cbe22c784c4de72bde', 'd97bf1427de1ae849b844e5e'],

        archived: false
      }
    ]
  }

  return (
    <>
      <ShoppingListProvider>
        <Dashboard users = {mockData.users} shopLists = {mockData.shopLists} userId = {mockData.userId}/>
      </ShoppingListProvider>
    </>
  );
}

export default App;
