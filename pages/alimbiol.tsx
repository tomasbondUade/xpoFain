import type { NextPage } from 'next'
import styles from '../styles/areas.module.css'
import BasicStack from '../components/mainAreas'

const Calendar: NextPage = () => {
    return (
        <div className={styles.general}>
            <main>
                <BasicStack/>
            </main>
        </div>
    )
}

export default Calendar