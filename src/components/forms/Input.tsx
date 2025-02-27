import styles from './forms.module.css'

interface propId{
  id:string,
  placeholder:string,
  type:string
}

const Input = ({id, placeholder,type }:propId) => {
  return (
    <>
        <input id={id} placeholder={placeholder} type={type}
        className={`${styles.input} py-2 px-4 bg-transparent rounded-md`}/>
    </>
  )
}

export default Input
