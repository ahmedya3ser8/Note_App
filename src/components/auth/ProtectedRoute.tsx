import { useAppSelector } from "@store/hooks"
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
  const {token} = useAppSelector(state => state.auth);
  if (token == null) {
    return <Navigate to={'/auth/login'} />
  }
  return <>{children}</>
}
