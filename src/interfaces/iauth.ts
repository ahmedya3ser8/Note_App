import { TLoading } from "@customTypes/shared"

export interface IAuthState {
  msg: string | null,
  user: {
    name: string
    email: string
    password: string
    age: number
    phone: string
    role: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
  } | null,
  token: string | null,
  loading: TLoading,
  error: string | null
}

export interface IRegisterResponse  {
  msg: string | null,
  user: {
    name: string
    email: string
    password: string
    age: number
    phone: string
    role: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
  } | null
}

export interface TLoginResponse {
  msg: string | null,
  token: string | null
}
