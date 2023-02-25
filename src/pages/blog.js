import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import styles from '../styles/blogs.module.css'
import Link from 'next/link'

const blog = (props) => {
    const [blogs, setBlogs] = useState(props.data)

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {
                    blogs.map((item, key) => {
                        return (
                            <div key={key} className={styles.card}>
                                <h3>{item.title}</h3>
                                <p>{item.metadesc}</p>
                                <br />
                                <div className={styles.readmore}>
                                    <span>Author: {item.author}</span>
                                    <button >
                                        <Link href={`/how-to/${item.slug}`}>
                                            Read More
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default blog

export async function getServerSideProps(context) {
    let res = await fetch('http://localhost:3000/api/getAllBlog');
    let data = await res.json();
    return {
        props: {data}, // will be passed to the page component as props
    }
}