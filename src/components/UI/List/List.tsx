import styles from './List.module.scss'
import {FC, PropsWithChildren} from 'react'
import { MyList } from './List.module'

const List: FC<PropsWithChildren<MyList>> = ({
    children, 
    ...props
}) => {
    return(
        <li className={styles.List} {...props}>
            {children}
        </li>
    )
}

export default List