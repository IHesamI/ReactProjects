import Demo from './components/Demo'
import Hero from './components/Hero'
function App() {
  return (
    <main>
      <div
        className='main'>
        <div className='gradient'>
        </div>
        <div
        className='app'>
          <Hero/>
          <Demo/>

        </div>
      </div>
    </main>
  )
}

export default App
