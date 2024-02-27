import style from './text.module.css'

const Text =({color,size,padding,children})=>{
    return <p className={`${style.text} ${style[color]} ${style[size]} ${style[padding]}`}>{children}</p>
}
export default Text