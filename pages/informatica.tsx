import type { NextPage } from 'next'
import styles from '../styles/calendar.module.css'
import BasicTable from '../components/Table'


const Infor: NextPage = () => {
    return (
        <div className={styles.general}>
            <main>
                <h1>DIA 1</h1>
                <BasicTable/>
            </main>
        </div>
    )
}

export default Infor