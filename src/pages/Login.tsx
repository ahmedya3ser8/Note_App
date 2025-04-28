import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import Input from "@components/forms/Input/Input";

export default function Login() {
  const {token, handleSubmit, register, loading, submitForm, error, formError} = useLogin();
  if (token !== null) {
    return <Navigate to={'/'} />
  }
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">User Login</h2>
      <form onSubmit={handleSubmit(submitForm)} className="max-w-lg mx-auto">
        <Input type="email" label="email" register={register} name="email" error={formError.email?.message as string} />
        <Input type="password" label="password" register={register} name="password" error={formError.password?.message as string} />
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
          {loading === 'pending' ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Login'}
        </button>
        {error && <p className="text-red-500 mt-1 text-center text-sm">{error}</p>}
      </form>
    </section>
  )
}
