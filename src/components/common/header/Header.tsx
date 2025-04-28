import { logout } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.auth)
  return (
    <header className="p-4 bg-slate-50 shadow-md">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={'/'} className="text-green-500 text-2xl font-semibold">Note App</Link>
          <nav>
            <ul className="flex gap-3">
              {token == null ? <>
                <li>
                <NavLink to={'/auth/register'}  className="transition-colors duration-300">Register</NavLink>
              </li>
              <li>
                <NavLink to={'/auth/login'}  className="transition-colors duration-300">Login</NavLink>
              </li>
              </> : <>
              <li>
                <Link to={'/auth/login'} className="cursor-pointer" onClick={() => dispatch(logout())} >Logout</Link>
              </li>
              </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
