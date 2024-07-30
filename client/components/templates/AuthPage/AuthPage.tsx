import { MutableRefObject, useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/auth/index.module.scss'
import SigneUpForm from '@/components/modules/AuthPage/SigneUpForm'
import SigneInForm from '@/components/modules/AuthPage/SigneInForm'

const AuthPage = () => {
  const isMedia800 = useMediaQuery(800)
  const switchCtn = useRef() as MutableRefObject<HTMLDivElement>
  const switchC1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchC2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const aContainer = useRef() as MutableRefObject<HTMLDivElement>
  const bContainer = useRef() as MutableRefObject<HTMLDivElement>

  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx)
    setTimeout(() => switchCtn.current.classList.remove(styles.is_gx), 1500)
    switchCtn.current.classList.toggle(styles.is_txr)
    switchCircle1.current.classList.toggle(styles.is_txr)
    switchCircle2.current.classList.toggle(styles.is_txr)

    switchC1.current.classList.toggle(styles.is_hidden)
    switchC2.current.classList.toggle(styles.is_hidden)
    aContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_z200)
  }

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${styles.a_container}`}
        id="a-container"
        ref={aContainer}
      >
        <div className={styles.container__inner}>
          <SigneUpForm switchForm={switchForm} />
        </div>
      </div>

      <div
        className={`${styles.container} ${styles.b_container}`}
        id="b-container"
        ref={bContainer}
      >
        <div className={styles.container__inner}>
         <SigneInForm/>
        </div>
      </div>

      <div className={styles.switch} id="switch-cnt" ref={switchCtn}>
        <div className={styles.switch__circle} ref={switchCircle1}></div>
        <div
          className={`${styles.switch__circle} ${styles.switch__circle__t}`}
          ref={switchCircle2}
        ></div>
        <div className={styles.switch__container} id="switch_c1" ref={switchC1}>
          {!isMedia800 && (
            <>
              <h2 className={`${styles.form_title} ${styles.title}`}>
                Добро пожаловать !
              </h2>
              <p
                className={`${styles.switch__description} ${styles.description}`}
              >
                Чтобы оставаться с нами на связи, пожалуйста, войдите под своей
                личной информацией
              </p>
            </>
          )}
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch_btn}`}
          >
            Войти
          </button>
        </div>
        <div
          className={`${styles.switch__container} ${styles.is_hidden}`}
          id="switch_c2"
          ref={switchC2}
        >
          {!isMedia800 && (
            <>
              <h2 className={`${styles.switch__title} ${styles.title}`}>
                Привет, друг!
              </h2>
              <p
                className={`${styles.switch__description} ${styles.description}`}
              >
                Введите свои личные данные для создания аккаунта
              </p>
            </>
          )}
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch_btn}`}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
