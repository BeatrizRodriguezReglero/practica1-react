import style from './button.module.css'

const Button= ({color,children})=>{
 return <button className={`${style.button}`}>{children}</button>
}
export default Button