import './App.css';
import { useEffect, useState,useContext, createContext } from 'react';
import { fetchQuotes, fetchQuotesList } from './API';
import { Home } from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {BiCategory, BiRefresh} from 'react-icons/bi'
import { List } from './Components/List';
import {useNavigate} from 'react-router-dom'


type FullQuoteType = {
  quote: string;
  author: string;
  category: string;
  categorys?: string

};
console.log("fff")


function App() {
  const [fullQuote, setFullQuote] = useState<FullQuoteType | null>(null);
  const [listing, setListing] = useState<FullQuoteType[]>([]);
  const [categorys, setCategorys] = useState<string | undefined>(undefined);


    // const fetchQuoteDataQuote = async () => {
    //   try {
    //     const fetchedQuote = await fetchQuotes();
    //     setFullQuote(fetchedQuote);
    //     setCategorys(fetchedQuote?.category);
    //     console.log("first", fetchedQuote);

       
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchQuoteData();
   
    // const fetchQuoteData = async () => {
    //   try {
        
    //     const response = await fetchQuotesList(categorys);
    //     if (response) {
    //       setListing(response);
    //       console.log("second", response)

    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    useEffect(() => {
      async function fetchmyAPI() {
        try {
          const fetchedQuote = await fetchQuotes();
          setFullQuote(fetchedQuote);
          setCategorys(fetchedQuote?.category);
    
          // Fetch the quotes list using a separate async function
          const response = await fetchQuotesList(fetchedQuote?.category);
          if (response) {
            setListing(response);
            console.log("second", response);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchmyAPI().catch(console.error);
    }, []);
    
  const handleClick = () => {
   window.location.reload()

    

  }

//   const localStorage = window.localStorage;

// localStorage.setItem('category', 'categorys');



  return (
    <div className="px-4 flex flex-col h-screen">
      <BrowserRouter>

      <header className='float-right flex items-center font-bolder   space-x-2'>
            <p className='lg:text-xl text-base'>random</p>
            <BiRefresh className='lg:text-xl  text-base' onClick={handleClick}/>
        </header>
      <Routes>
        <Route path="/" element= {fullQuote != null  && (
         <Home fullQuote = {fullQuote}/>
      )} />
        <Route path="/List" element= {listing != null  && (
         <List listing = {listing}   />
      )} />
        {/* <Route path="/List" element={<List/>}/> */}

      </Routes>
      </BrowserRouter>
      
     
      
    </div>
  );
}

export default App;
