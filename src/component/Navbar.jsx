

export default function Navbar() {
  return (
    <div>
  <nav className="bg-violet-400 ">
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between items-center h-16 text-white ">

        
        <div className="text-shadow-white flex justify-between text-xl font-bold ">
          <lord-icon
             src="https://cdn.lordicon.com/hjrbjhnq.json"
              trigger="loop"
               state="loop-book" >
                </lord-icon> <span className="text-cyan-800">Password</span><span className="text-purple-900">Manager</span>
        </div>

        
        <div className="flex justify-center  gap-2">
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:font-bold ">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:font-bold">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:font-bold">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:font-bold">Contact</a>
          <div className="">
            <button className="flex bg-cyan-500 shadow-lg shadow-cyan-500/50 justify-around gap-1 rounded-full  cursor-pointer" >
              <img className="w-5 ml-2" src="social.png" alt="" />
              <span className="font-bold mr-2">github</span>
            </button>
            

          </div>
          
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
