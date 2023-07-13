import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'


type FullQuoteType = {
    quote: string;
    author: string;
    category: string;
  };
  
  type HomeProps = {
    fullQuote: FullQuoteType;
  };

export const Home: React.FC<HomeProps> = ({ fullQuote }) => {
   
    const navigate = useNavigate();
    
  return (
    <div className='flex flex-col p-2 h-screen items-center'>
        

        <section className='max-w-xl relative w-[100%] lg:w-[80%] h-[90%] text-justify flex flex-col justify-center'>
            <div className="lg:px-10 px-4 border-l-orange-500 border-l-8 h-auto w-[100%]">
                <h1 className="text-black text-base lg:text-xl font-bold">"{fullQuote.quote}"</h1>
            </div>
            <div className="cursor-pointer absolute mx-10 w-[80%] p-2 bottom-0 flex justify-between items-center hover:bg-slate-600 hover:text-white">
               <div>
               <h1 className=" text-sm lg:text-xl font-bold">{fullQuote.author}</h1>
                <p className='text-base'>{fullQuote.category}</p>
               </div>
                <FaLongArrowAltRight onClick={() =>navigate("/List")}/>
            </div>

        </section>

        <footer className='text-center flex justify-center mx-auto absolute bottom-0  '>
            designed by oke kolawole sunday
        </footer>

      
    </div>
  )

}
