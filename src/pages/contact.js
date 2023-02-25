import Navbar from '@/components/Navbar'
import React from 'react'

export default function contact() {
  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:'center'}}>Contact us</h1>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'50%', margin:'auto'}}>
        <p style={{textAlign:'justify'}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
    </div>
    </>
  )
}
