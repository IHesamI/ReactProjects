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
          onClick={() => console.error('zarp')}
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
    </header>
  )
}
