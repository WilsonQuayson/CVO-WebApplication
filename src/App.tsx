import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Students from "./components/Students/Students";
import StudentInfo from "./components/StudentInfo/StudentInfo";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children : [
        {
          path: "",
          element: <Home />
        },
        {
          path: "students",
          element: <Students />
        },
        {
          path: "students/:id",
          element: <StudentInfo />
        },
        {
          path: "Cursussen",
          element: <Home />
        },
        {
          path: "teachers/:id",
          element: <StudentInfo />
        }
      ]
    }
  ])
  return (
    <div className="min-w-[320px] min-h-screen p-4 flex flex-col bg-neutral-200">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;