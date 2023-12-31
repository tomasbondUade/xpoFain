import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import BasicTable from '../components/Table'


const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className={styles.general}>
      <header className={styles.head}>
        <Image src='/header.png' 
          alt='logo'
          width={600}
          height={400} >
        </Image>
        <div>
          <h2>Animate a vivir una experiencia inmersiva.</h2>
        </div>
      </header>
      <div className={styles.clima}>
        
      </div>
      <main className={styles.main}>
        <Image src='/PATIO.png'
        alt='cronograma'
        width={600}
        height={800}
      />
      </main>
          </div>
  )
}

export default Home
