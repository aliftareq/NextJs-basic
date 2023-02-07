import Banner from '@/Components/Banner/Banner'
import Footer from '@/Components/Footer/Footer'
import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Banner />
      <Footer />
    </div>
  )
}
