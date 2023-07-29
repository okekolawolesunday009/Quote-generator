import React, { useEffect, useState } from 'react';
import { fetchQuotesList } from '../API';
import Cards from './Cards';

type ListingType = {
  quote: string;
  author: string;
  category: string;
};

type ListProps = {
 listing: ListingType[];
};
export const List: React.FC<ListProps> = ({ listing }) => {
  // console.log(listing)

  return (
    <div>
      {listing && (
        <div className='flex  flex-col h-[100%] justify-between'>
         <h1 className=' text-3xl font-bold mt-4'> {listing[0].category.toUpperCase()}</h1>
          
          <ul>
            {listing.map((quotes, index) => (
             <Cards key ={index} quotes = {quotes}/>
            ))}
          </ul>
            </div>
        
      )}
    </div>
  );
};
