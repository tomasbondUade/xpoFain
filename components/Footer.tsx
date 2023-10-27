import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import { Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'


const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <Image
          src={'/footer.png'}
          width={600}
          height={160}
        ></Image>
        <div className={styles.linksRedes}>
          <LinkedIn />
          <Instagram />
          <Twitter />
          <YouTube />
        </div>
      </div>
    </footer>
  )
}

export default Footer