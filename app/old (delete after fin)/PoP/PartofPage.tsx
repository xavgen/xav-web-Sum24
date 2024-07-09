import Link from 'next/link'
import AbtPoP from './abtPoP';
import ProjPoP from './projPoP';
import SkillsPoP from './skillsPoP';
import InvPoP from './invPoP';


export default function PoP() {
    return (
        <main>
            <div style={{ height: '22.5vh' }}></div>
            <div id="about" style={{ height: '11.5vh' }}></div>
            
            <div className='rounded-3xl ml-20 mr-20' style={{ borderColor: 'rgba(83, 56, 87)', borderWidth: '2px', backgroundColor: 'rgba(15, 17, 12)' }}>
            <AbtPoP />
            </div>

      <div style={{ height: '22.5vh' }}></div>
      <div  id="projects" style={{ height: '11.5vh' }}></div>
      <div className='rounded-3xl ml-20 mr-20' style={{ borderColor: 'rgba(83, 56, 87)', borderWidth: '2px', backgroundColor: 'rgba(15, 17, 12)' }}>
      <ProjPoP />
      </div>

      <div style={{ height: '22.5vh' }}></div>
      <div id="skills" style={{ height: '11.5vh' }}></div>

      <div className='rounded-3xl ml-20 mr-20' style={{ borderColor: 'rgba(83, 56, 87)', borderWidth: '2px', backgroundColor: 'rgba(15, 17, 12)' }}>
      <SkillsPoP />
      </div>

      <div style={{ height: '22.5vh' }}></div>
      <div id="involvements" style={{ height: '11.5vh' }}></div>
      
      <div className='rounded-3xl ml-20 mr-20' style={{ borderColor: 'rgba(83, 56, 87)', borderWidth: '2px', backgroundColor: 'rgba(15, 17, 12)' }}>
      <InvPoP />
      </div>
            
      <div style={{ height: '50vh' }}></div>
      </main>
    )
}