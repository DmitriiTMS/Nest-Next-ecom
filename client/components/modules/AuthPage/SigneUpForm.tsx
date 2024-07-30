import { singUpFx } from '@/app/api/auth'
import EmailInput from '@/components/elements/AuthPage/EmailInput'
import NameInput from '@/components/elements/AuthPage/NameInput'
import PasswordInput from '@/components/elements/AuthPage/PasswordInput'

import { IInputs } from '@/types/auth'
import { showAuthError } from '@/utills/errors'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from '@/styles/auth/index.module.scss'
import stylesSpinner from '@/styles/spinner/index.module.scss'

const SigneUpForm = ({ switchForm }: { switchForm: () => void }) => {
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
      const userdata = await singUpFx({
        url: '/api/users/signeup',
        username: data.name,
        email: data.email,
        password: data.password,
      })

      if (!userdata) {
        return
      }

      resetField('name')
      resetField('email')
      resetField('password')
      switchForm()
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form_title} ${styles.title}`}>
        Создать аккаунт
      </h2>

      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit}`}
      >
        {spinner ? <div className={stylesSpinner.spinner} /> : 'Создать'}
      </button>
    </form>
  )
}

export default SigneUpForm
