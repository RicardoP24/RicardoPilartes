
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative  flex h-[224px] lg:h-[368px] overflow-hidden items-center justify-center w-full shadow-md shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-cyan-500 to-teal-500'>
    <Image fill className='p-2 md:p-4 rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' /> 
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-md md:text-2xl text-white tracking-wider text-center'>{title}</h3>
          <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
          <Link href={{
            pathname:`/${projectUrl}`,
        
        }}>
              <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Ver mais</p>
          </Link>
      </div>
    </div>
  )
}

export default ProjectItem