import type { NextPage } from 'next'
import styles from '../styles/areas.module.css'
import BasicStack from '../components/mainAreas'

const pepito = ()=>{
    return(
        <p>hola</p>
    )
}

const Ingenieria: NextPage = () => {
    return (
        <div className={styles.general}>
            <main>
                <BasicStack/>
            </main>
        </div>
    )
}

export default Ingenieria