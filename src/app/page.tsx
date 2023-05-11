"use client"

import Image from 'next/image'
import styles from './page.module.css'
import StackableCards from '@/components/StackableCards'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <StackableCards />
      </div>
    </main>
  )
}
