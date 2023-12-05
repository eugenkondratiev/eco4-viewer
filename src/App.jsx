// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DayReportPage from './Pages/DayReport';
import MonthReportPage from './Pages/MonthReport';


import './App.css'
import ErrorPage from './Pages/ErrorPage';
import Root from './routes/root';
import InfoModal from './Components/InfoModal';
import { ParameterInfoProvider } from './context/parameter-info-context';

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

        element: <HomePage blr="blr4" />
      },
      {
        path: "/t5",
        errorElement: <ErrorPage />,

        element: <HomePage blr="t5" />
      },
    ]
  },

])

// export const ParameterInfoContext = createContext(null)

function App() {
  // const [parameterInfo, setParameterInfo] = useState(null)

  return (
    <ParameterInfoProvider>

      <RouterProvider router={router} />
      <InfoModal />
    </ParameterInfoProvider>

  )
}

export default App
