
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Update from './components/updateuser/Update';

function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Add/>,
    },
    {
      path:"/edit/:id",
      element:<Update/>
    }
  ])
  return (
    <div className="App">
      <p>hello</p>
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
