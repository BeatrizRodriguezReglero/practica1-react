
import style from './subtitle.module.css'

const Subtitle= ({color,children})=>{
 return <h3 className={`${style.subtitle} ${style[color]}`}>{children}</h3>
}
export default Subtitle