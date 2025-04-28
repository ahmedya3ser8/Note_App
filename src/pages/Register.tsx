import { Navigate } from "react-router-dom"
import useRegister from "@hooks/useRegister"
import Input from "@components/forms/Input/Input"

export default function Register() {
  const {token, handleSubmit, register, loading, submitForm, error, formError} = useRegister();
  if (token !== null) {
    return <Navigate to={'/'} />
  }
  return (
    <section className="py-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">User Registration</h2>
      <form onSubmit={handleSubmit(submitForm)} className="max-w-lg mx-auto">
        <Input label="name" register={register} name="name" error={formError.name?.message as string} />
        <Input type="email" label="email" register={register} name="email" error={formError.email?.message as string} />
        <Input type="password" label="password" register={register} name="password" error={formError.password?.message as string} />
        <Input type="number" label="age" register={register} name="age" error={formError.age?.message as string} />
        <Input type="tel" label="phone" register={register} name="phone" error={formError.phone?.message as string} />
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md">
          {loading === 'pending' ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Register'}
        </button>
        {error && <p className="text-red-500 mt-1 text-center text-sm">{error}</p>}
      </form>
    </section>
  )
}
