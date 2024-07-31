import { singInFx } from '@/app/api/auth'
import NameInput from '@/components/elements/AuthPage/NameInput'
import PasswordInput from '@/components/elements/AuthPage/PasswordInput'

import { IInputs } from '@/types/auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import styles from '@/styles/auth/index.module.scss'
import stylesSpinner from '@/styles/spinner/index.module.scss'
import { showAuthError } from '@/utills/errors'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { useRouter } from 'next/router'

const SigneInForm = () => {
  const [spinner, setSpinner] = useState(false)
  const router = useRouter()

  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true)
      const userdata = await singInFx({
        url: '/api/users/login',
        username: data.name,
        password: data.password,
      })

      if (!userdata) {
        return
      }
      resetField('name')
      resetField('password')
      router.push('/dashboard')
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <form className={`${styles.form} ${darkModeClass}` } onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form_title} ${styles.title} ${darkModeClass}`}>
        Войдите на сайт
      </h2>

      <NameInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}
      >
        {spinner ? <div className={stylesSpinner.spinner} /> : 'Войти'}
      </button>
    </form>
  )
}

export default SigneInForm
