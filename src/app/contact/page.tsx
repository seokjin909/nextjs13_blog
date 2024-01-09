import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

const LINKS = [
  {icon : <AiFillGithub />, url : 'https://github.com/seokjin909'},
  {icon : <AiFillLinkedin />, url : 'https://github.com/seokjin909'},
  {icon : <AiFillYoutube />, url : 'https://github.com/seokjin909'},
]


export const metadata: Metadata = {
  title: "Contact Me",
  description: 'Seokjin에게 메일 보내기',
}

function Contactpage() {
  return (
    <section className='flex flex-col items-center'>
    <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
    <p>info@seokjin.com</p>
    <ul className='flex gap-4 my-2'>
      {LINKS.map((link,index) => <a className='text-5xl hover:text-yellow-400' key={index} href={link.url} target='_blank' rel='noreferrer'>{link.icon}</a>)}
    </ul>
    <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
    <ContactForm />
    </section>
  )
}

export default Contactpage