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
      <iframe src="https://www.meteoblue.com/es/tiempo/widget/daily?geoloc=detect&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=light"   scrolling="NO" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"></iframe>
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
