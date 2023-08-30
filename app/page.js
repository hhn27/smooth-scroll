import Image from 'next/image'
import styles from './page.module.css'
import IndexHome from '@/components/indexHome'

export default function Home() {
  return (
    <main className={styles.main}>
      <IndexHome></IndexHome>
    </main>
  )
}
