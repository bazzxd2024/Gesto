import './App.css';
import './responsive.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EnrollmentVerification from './Verification';
import Report from './Report';
import Loader from './loader';
import EnrollStudent from './enrollForm';


const router = createBrowserRouter([
  { path: "/", element: <EnrollmentVerification /> },
  { path: "/report", element: <Report /> },
  { path: "/loader", element: <Loader /> },
  { path: "/enroll-student", element: <EnrollStudent /> },
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
