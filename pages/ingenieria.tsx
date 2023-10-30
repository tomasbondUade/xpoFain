import type { NextPage } from 'next'
import styles from '../styles/ingenieria.module.css'
import BasicStack from '../components/mainAreas'

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