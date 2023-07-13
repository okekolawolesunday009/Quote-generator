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
        <div className='flex justify-center  items-center flex-col h-screen'>
         <h1 className='text-center text-3xl font-bold'> {listing[0].category}</h1>
          <div className='mx-auto'>
          <ul>
            {listing.map((quotes, index) => (
             <Cards key ={index} quotes = {quotes}/>
            ))}
          </ul>
            </div>
        </div>
      )}
    </div>
  );
};
