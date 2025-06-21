
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from "react-redux"
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [{
    path:'/',
    element:<Maincontainer/>
  },
  {
    path:'watch',
    element:<WatchPage/>
  },
  {
    path:'demo',
    element:<>
    <Demo/>
    <Demo2/>
    </>
  },

  ]
}])
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Head /> */}
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;