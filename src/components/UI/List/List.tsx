import styles from './List.module.scss'
import {FC} from 'react'
import { MyList } from './List.module'

const List: FC<MyList> = ({children, props}) => {
    return(
        <li className={styles.List} {...props}>
            {children}
        </li>
    )
}

export default List