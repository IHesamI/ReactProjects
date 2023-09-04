import React from 'react'
import logo from '../assets/logo.svg';

export default function Hero() {
  return (
    <header
      className='w-full flex justify-center items-center flex-col'>
      <nav
        className='flex w-full mb-10 pt-3 justify-between items-center '>
        <img src={logo} className='w-28 object-contain' />
        <button
          type='button'
          onClick={() =>
            window.open('https://github.com/adrianhajdin')
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1
        className='head_text'>
        Summerize Articles With <br />
        <span
          className='orange_gradient'>
          OpenAi GPT-4
        </span>
      </h1>
      <h2
      className='desc'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos odit expedita mollitia, nobis enim tenetur? Aliquam earum laudantium
        temporibus ea cumque quidem provident tempore optio. Voluptatum dicta repudiandae iusto temporibus.
      </h2>
    </header>
  )
}
