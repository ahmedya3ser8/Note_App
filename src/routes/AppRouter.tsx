import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "@layouts/main-layout/MainLayout"
const Home = lazy(() => import('@pages/Home'));
const Register = lazy(() => import('@pages/Register'));
const Login = lazy(() => import('@pages/Login'));
import NotFound from "@pages/NotFound"
import ProtectedRoute from "@components/auth/ProtectedRoute";

const router = createBrowserRouter([
  {path: '', element: <MainLayout />, children: [
    {
      index: true, 
      element: 
        <Suspense>
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </Suspense>
    },
    {
      path: 'auth/register', 
      element: 
        <Suspense>
          <Register />
        </Suspense>
    },
    {
      path: 'auth/login', 
      element: 
        <Suspense>
          <Login />
        </Suspense>
    },
    {
      path: '*', 
      element: <NotFound />
    }
  ]}
])

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}
