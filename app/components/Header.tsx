import CustomButton from "./CustomButton"


export default function Header() {
  return (
    <div className="w-full h-[1] bg-black">
        <header className="flex items-center w-[92%] bg-black  mx-auto p-4">
            <div> 
                <p className="text-white">| hello@cargo.io</p>
            </div>

            <nav className="flex-1">
                <ul className="flex gap-8 items-center justify-center text-[#A1A1A1]">
                    <li className="hover:text-white">Product</li>
                    <li className="hover:text-white">Our Work</li>
                    <li className="hover:text-white">Services</li>
                </ul>
            </nav>

            <div className="flex gap-2 items-center">
                <p>FAQ</p>
                <CustomButton 
                title="Get Started"
                link="#"
                className="bg-[#276DF1] text-white px-5 py-2 rounded-full"
                 />        
            </div>
    </header>
    </div>
  )
}
