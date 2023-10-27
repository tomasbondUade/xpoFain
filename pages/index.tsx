import type { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'


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
          <h5>Animate a vivir una experiencia inmersiva.</h5>
        </div>
      </header>
      <main className={styles.main}>
        <div>          
          <Button variant="text"
            onClick={() => {
              router.push("/calendar")
            }}
          >
           CALENDARIO
          </Button>
          <ButtonGroup variant="text"  aria-label="">
            <Button 
            onClick={() => {
              router.push("")
            }}
            >Area ingenieria</Button> 
            <Button>Area informatica</Button>
            <Button>Area alimentos y biociencias</Button>
            <Button>Area ambiental</Button>
          </ButtonGroup>
        </div>
      </main>
    </div>
  )
}

export default Home
