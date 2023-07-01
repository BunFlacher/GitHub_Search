import { MyButton } from './Button.interface'
import styles from './Button.module.scss'
import {FC, PropsWithChildren} from 'react'
import cn from 'classnames'

const Button: FC<PropsWithChildren<MyButton>> = ({
    children,
    className,
    ...props
}) => { 
    return (
        <div>
            <button {...props} className={cn(styles.Button, className)}>
                {children}
            </button>
        </div>
    )
}

export default Button