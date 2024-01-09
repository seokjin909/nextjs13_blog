import Image from 'next/image'
import React from 'react'
import profileImage from "../../public/images/profile.png"
import Link from 'next/link'

function Hero() {
  return (
    <section className='text-center'>
        <Image src={profileImage} alt='Picture of the author' width={250} height={250} className='mx-auto rounded-full' priority/>
        <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Seokjin"}</h2>
        <h3 className='text-xl font-semibold'>Front-End Developer</h3>
        <p>항해를 헤쳐나가는 사람, 바로 나..!</p>
        <Link href="/contact">
            <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
        </Link>
    </section>
  )
}

export default Hero