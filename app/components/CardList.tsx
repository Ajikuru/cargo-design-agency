'use client'
import Card from './Card'
import cardDetails from '../../public/card-data.json';
import { useState } from 'react';



export default function CardList() {

    const [current, setCurrent] = useState<number>(0) ;

  return (
    <div className='max-w-[1024px] bg-black mx-auto px-10 '>
        <div className='flex items-end justify-between py-4'>
            <p className='text-[1.5rem]'> Case Studies</p>
            <p className='text-[1rem] underline '> View All</p>
        </div>
        <div>

        <div className='flex gap-4 justify-between mt-5'>

            {
                cardDetails.map((item,key) => {
                    return (
                        <Card
                        app = {item.app}
                        title= {item.title}
                        category={item.category}
                        description= {item.description}
                        addStyle={current== key ? "card-active": ""}
                        key={key}                        
                        handler={()=> setCurrent(key)}
                        
                        />
                    )
                })
            }
            {/* <Card />
            <Card /> */}
        </div>
            
        </div>

    </div>
  )
}
