import styles from './forms.module.css'


interface propTypes{
  id:string,
  placeholder:string,
  type:string
}

const Input = ({id, placeholder,type }:propTypes) => {
  return (
    <>
        <input id={id} placeholder={placeholder} type={type}
        className={`${styles.input} py-2 px-4 bg-transparent rounded-sm`}/>
    </>
  )
}

export default Input
