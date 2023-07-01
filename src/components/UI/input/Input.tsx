import { MyInput } from "./Input.interface";
import {FC} from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'


const Input: FC<MyInput> = (props, {className}) => {
    return (
        <input type="text" className={cn(styles.Input, className)} {...props}/>
    )
}

export default Input