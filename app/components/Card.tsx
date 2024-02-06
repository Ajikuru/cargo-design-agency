
import ArrowIcon from "../../public/assets/icons/right-arrow.svg";
import Image from 'next/image';


interface card{
    app: boolean,
    category: string,
    title: string,
    description: string,
    addStyle:string,
    handler:Function

}

export default function Card({app,category,title,handler,addStyle,description,...props} : card) {
  return (
    <div 
    onClick={()=> handler()}
    className={`w-[280px] h-[185px] bg-black rounded-[20px] p-5 border-white border-[1px] hover:bg-[#A1A1A1] hover:border-0 ${addStyle}`}>

    <div className='flex justify-between text-[12px]'>
      <p>{category.toUpperCase()}</p>
      <p>{app ? "Mobile" : 'Dashboard'}</p>
     </div>
     <h1 className='text-2xl py-2'>{title}</h1>   
     <p className='text-[12px] py-3'>{description}</p>
     <p className='flex text-[12px] font-bold gap-3 items-center'>
      View Case Study 
      <Image
      priority
      src={ArrowIcon}
      alt="Follow us on Twitter"
      width={18}
      style={{color:'white'}}
      />

     </p>

  </div>

  )
}
