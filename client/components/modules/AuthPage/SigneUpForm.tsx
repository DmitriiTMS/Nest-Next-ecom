import EmailInput from '@/components/elements/AuthPage/EmailInput'
import NameInput from '@/components/elements/AuthPage/NameInput'
import PasswordInput from '@/components/elements/AuthPage/PasswordInput'

import styles from '@/styles/auth/index.module.scss'
import { IInputs } from '@/types/auth'
import { useForm } from 'react-hook-form'

const SigneUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField
  } = useForm<IInputs>()

  const onSubmit = async (data: IInputs) => {
    try {
      console.log(data)
      resetField('name')
      resetField('email')
      resetField('password')
      switchForm()
    } catch (error) {}
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
        Создать
      </button>
    </form>
  )
}

export default SigneUpForm
