import { createEffect } from 'effector'
import api from '../axiosClient'

import { ISignInFx, ISignUpFx } from '../../types/auth'
import { toast } from 'react-toastify'

export const singUpFx = createEffect(
  async ({ url, username, password, email }: ISignUpFx) => {
    const { data } = await api.post(url, { username, password, email })
    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }
    toast.success('Регистрация прошла успешно')
    return data
  }
)

export const singInFx = createEffect(
  async ({ url, username, password }: ISignInFx) => {
    const { data } = await api.post(url, { username, password })

    toast.success('Вход выполнен')
    return data
  }
)
