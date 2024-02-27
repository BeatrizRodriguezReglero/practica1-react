
import style from './subtitle.module.css'

const Subtitle= ({color,padding,children})=>{
 return <h3 className={`${style.subtitle} ${style[color]} ${style[padding]}`}>{children}</h3>
}
export default Subtitle