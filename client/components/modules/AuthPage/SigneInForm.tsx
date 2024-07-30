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

const SigneInForm = () => {
  const [spinner, setSpinner] = useState(false)

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
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form_title} ${styles.title}`}>
        Войдите на сайт
      </h2>

      <NameInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit}`}
      >
        {spinner ? <div className={stylesSpinner.spinner} /> : 'Войти'}
      </button>
    </form>
  )
}

export default SigneInForm
