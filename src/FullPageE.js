import React from 'react'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Skills from './components/Skills/Skills.jsx'

const FullPageE = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ height: '100vh' }}>
          <About />
        </FullpageSection>
        <FullpageSection style={{ height: '100vh' }}>
          <Projects />
        </FullpageSection>
        <FullpageSection style={{ height: '100vh' }}>
          <Skills />
        </FullpageSection>
      </FullPageSections>
    </Fullpage >
  )
}

export default FullPageE