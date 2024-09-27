import './App.css';
import './responsive.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EnrollmentVerification from './Verification';
import Report from './Report';


const router = createBrowserRouter([
  { path: "/", element: <EnrollmentVerification /> },
  { path: "/report", element: <Report /> },
])

function App() {
  return (
    <div className="App">


      {/* <EnrollmentVerification /> */}

      {/* <Report /> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
