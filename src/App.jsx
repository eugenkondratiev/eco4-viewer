// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DayReportPage from './Pages/DayReport';
import MonthReportPage from './Pages/MonthReport';


import './App.css'
import ErrorPage from './Pages/ErrorPage';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/day",
        element: <DayReportPage />,
        errorElement: <ErrorPage />

      },

      {
        path: '/month',
        element: < MonthReportPage />,
        errorElement: <ErrorPage />
      },
      {
        path: "/home",
        errorElement: <ErrorPage />,

        element: <HomePage />
      },
      {
        path: "/blr4",
        errorElement: <ErrorPage />,

        element: <HomePage blr="blr4"/>
      },
      {
        path: "/t5",
        errorElement: <ErrorPage />,

        element: <HomePage blr="t5"/>
      },
    ]
  },

])


function App() {
  // const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />

  )
}

export default App
