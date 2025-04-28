import { zodResolver } from "@hookform/resolvers/zod";
import actAuthRegister from "@store/auth/act/actAuthRegister";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { singUpSchema, TSignUpType } from "@validations/signUpSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {loading, error, token} = useAppSelector(state => state.auth);
  const {register, handleSubmit, formState: {errors: formError}} = useForm<TSignUpType>({
    mode: 'onTouched',
    resolver: zodResolver(singUpSchema)
  })
  const submitForm: SubmitHandler<TSignUpType> = (data) => {
    dispatch(actAuthRegister(data)).unwrap().then((res) => {
      if (res.msg === 'done') {
        navigate('/auth/login')
      }
    })
  }
  return {submitForm, loading, error, token, register, handleSubmit, formError}
}
