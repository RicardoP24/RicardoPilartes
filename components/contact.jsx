import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillInstagram,AiFillFacebook } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import contactPic from '../public/contactPic.webp';
import emailJs from 'emailjs-com'
 
 
const Contact = () => {

  

  const [nome,setNome]=useState("");
  const [email,setEmail]=useState("");
  const [assunto,setAssunto]=useState("");
  const [msn,setMsn]=useState("");

  const onHandleSubmit=(e)=>{
    
    e.preventDefault();
  
     if(nome==="" || email==="" || assunto==="" || msn===""){
        alert("preencha os Campos vazios");
        return;
     }
 
 
 
       
        
    emailJs.sendForm(
      'gmailMessage','template_4e646uv',e.target,"NToswUJTotIMqUZ-m"
    ).then((result)=>{
      alert("Mensagem enviada com sucesso! Aguarde pela resposta e fique atento aos seus emails ")
    },(error)=>{
      alert(error.message)
     });
  
    e.target.reset();
    setNome(""); setEmail(""); setAssunto(""); setMsn("");
  
   }
  
  return (
    <div id='contact' className='md:px-8 w-full '>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-cyan-500'>
          Contactos
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='items-center justify-center flex col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div className=' overflow-hidden pb-8'>
                <Image
                  className='rounded-full  border-[1px] border-gray-600 '
                  src={contactPic}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Ricardo Pilartes</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                   Estou disponível para freelance e para trabalhos full-time. Não hesite em contactar-me. 
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Redes Sociais</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/ricardo-pilartes-da-silva-54243b221/'
                    target='_blank'
                    rel='noreferrer'
                    
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn className='text-lg' />
                    </div>
                  </a>
                  <a
                    href='https://github.com/RicardoP24'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub className='text-lg' />
                    </div>
                  </a>

                  <a
                    href='https://www.facebook.com/profile.php?id=100015332328463'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiFillFacebook className='text-lg' />
                    </div>
                  </a>

                  <a
                    href='https://www.instagram.com/rp_designcriativo/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiFillInstagram className='text-lg' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-sm shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>

              <form
               onSubmit={onHandleSubmit}>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Nome</label>
                    <input
                      className='border-2 text-gray-900 rounded-lg p-3 flex border-gray-300'
                      type='text'
                       onChange={(target)=>setNome(target?.value)}
                      name='name'
                    />
                </div>
 
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 text-gray-900 rounded-lg p-3 flex border-gray-300'
                    type='email'
                     onChange={(target)=>setEmail(target?.value)}
                    name='email'/>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Assunto</label>
                  <input
                    className='border-2 text-gray-900 rounded-lg p-3 flex border-gray-300'
                    type='text'
                     onChange={(target)=>setAssunto(target?.value)}
                    name='subject'/>
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Mensagem</label>
                  <textarea
                    className='border-2 text-gray-900 rounded-lg p-3 border-gray-300'
                    rows='10'
                     onChange={(target)=>setMsn(target?.value)}
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-cyan-500 mt-4'>
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className=' text-cyan-500'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;