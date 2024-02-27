

import style from './container.module.css'

const Container = ({color,item,children})=>{
    return <div className={`${style.container} ${style[color]} ${style[item]} `}>
        {children}
       
    </div>
}
export default Container