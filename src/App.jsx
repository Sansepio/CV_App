import { useState } from 'react'
import PersonalInfo from './components/personal-information/PersonalInfo'
import ResumePreview from './components/ResumePreview/ResumePreview'
import './App.css'

function App () {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  return (
    <>
      <h1>Creador de Curriculums</h1>
      <main className='main-section'>
        <section className='section'>
          <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        </section>
        <section className='section'>
          <ResumePreview personalInfo={personalInfo} />
        </section>
      </main>
    </>
  )
}

export default App
