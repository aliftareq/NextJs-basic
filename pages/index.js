import Banner from '@/Components/Banner/Banner'
import Footer from '@/Components/Footer/Footer'
import Post from '@/Components/Post/Post'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
export default function Home({ Posts }) {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Banner />
      <div>
        {Posts?.map(post => <Post key={post.id} post={post} />)}
      </div>
      <Link href='/Posts'>
        <div className='text-center'>
          <button className='btn btn-warning'>See More</button>
        </div>
      </Link>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();
  //console.log(data)
  return {
    props: {
      Posts: data
    }
  }
}
