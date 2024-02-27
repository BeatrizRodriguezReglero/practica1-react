

import style from './container.module.css'

const Container = ({color,children})=>{
    return <div className={`${style.container} ${style[color]} `}>
        {children}
       
    </div>
}
export default Container