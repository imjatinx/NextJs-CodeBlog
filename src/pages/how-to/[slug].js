import { useState } from 'react'
import styles from '@/styles/slug.module.css'
import Navbar from '@/components/Navbar';

const Post = (props) => {

  const [blog, setBlog] = useState(props.data)

  function createMarkup(content) {
    return { __html: content };
  }


  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <h3>{blog && blog.title}</h3>
      {blog && <p className={styles.desc} dangerouslySetInnerHTML={createMarkup(blog.description)}></p>}
      <span>author : {blog && blog.author}</span>
    </div>
    </>
  )
}
// }

export default Post

export async function getServerSideProps(context) {

  const { slug } = context.query
  let res = await fetch(`http://localhost:3000/api/getOneBlog?slug=${slug}`);
  let data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  }
}