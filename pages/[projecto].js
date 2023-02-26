import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const projecto = ({data}) => {
  let c="";
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1 bg-cover px-2'
          layout='fill'
          objectFit='cover'
          src={data[0]?.img}
          alt='/'
        />
        <div className=' absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{data[0]?.title}</h2>
          {data[0]?.tools.map(t=>{
            c=t+" / " + c;
          })}
          <h3>{`${c}`}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
            <p className='text-xl font-semibold'>Projecto</p>
            <div className='pb-4'></div>
            <h2 className='font-semibold'>Overview</h2>
            <div className='pb-4'></div>
            <p>
              
        {data[0]?.Description}
          </p>
          <div className='pb-4'></div>

          <div className='flex gap-4'>
            <button className='flex hover:scale-105 ease-in duration-200'>
            <a className='py-2 px-4 text-center text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-500'
              target='_blank' href={`${data[0]?.link}`}>
              Projecto
            </a>
            </button>

            {data[0]?.title=="Trois Metalliques"?<div></div>:<button className='flex hover:scale-105 ease-in duration-200'>
            <a className='py-2 px-4 text-center text-white rounded-md bg-gradient-to-r from-gray-500 to-gray-800'
              target='_blank' href={`${data[0]?.github}`}>
              Código
            </a>
            </button>}
          </div>
 


 
 
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {data[0]?.tools.map(
                e=>
                <p key={`${e}`} className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> {`${e}`}
                </p>
                
              )}
 
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default projecto

export async function getStaticPaths(){

  const {projectos}=await import('../data/data.json');
  const allPaths=projectos.map((ev)=>{
      return {
          params:{
              projecto:ev.path.toString(),
          }
      };
  });

  console.log(allPaths)

  return {
     paths: allPaths,
     fallback: false
  }
  
}
//get static props pode ser usado sozinho quando a pagina é estática (sem path variável)
export async function getStaticProps(context){

  const id = context?.params.projecto;
  const {projectos} = await import('../data/data.json');
  const projects=projectos.filter((ev)=>id===ev.path);
  
  return { 
    props:{ 
      data:projects,
    }

  };

}
 