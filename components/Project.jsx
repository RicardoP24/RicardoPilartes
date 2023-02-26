import React from 'react'
import ProjectItem from './ProjectItem'


function Projects({data}) {
  
  return (
    <div id='projects' className='md:px-8 w-full'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl tracking-widest uppercase  text-cyan-500'>
        Projects
      </p>
      <h2 className='py-4'>What I&apos;ve Built</h2>
      <div className='grid md:grid-cols-2 gap-8'>

        {data.map(ev=>
          <ProjectItem
            key={ev.title}
            title={ev.title}
            backgroundImg={ev.img}
            projectUrl={ev.path}
            tech={ev.mainTech}
          />
            
          )}
 
     
      </div>
    </div>
  </div>  )
}

export default Projects

 