import { zodResolver } from "@hookform/resolvers/zod";
import actAuthLogin from "@store/auth/act/actAuthLogin";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { singInSchema, TSignInType } from "@validations/signInSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {loading, error, token} = useAppSelector(state => state.auth);
  const {register, handleSubmit, formState: {errors: formError}} = useForm({
    mode: 'onTouched',
    resolver: zodResolver(singInSchema)
  })
  const submitForm: SubmitHandler<TSignInType> = (data) => {
    dispatch(actAuthLogin(data)).unwrap().then((res) => {
      if (res.msg === 'done') {
        localStorage.setItem('token', res.token as string);
        navigate('/')
      }
    })
  }
  return {submitForm, loading, error, token, register, handleSubmit, formError}
}
