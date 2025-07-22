import React from 'react'

function footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-800 to-gray-800 text-gray-300 py-3 mt-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " >
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
      <h2 className="text-2xl font-bold mb-4 md:mb-0 text-white">Tonmoy's Password Manager</h2>
      <div className="flex space-x-6 text-sm">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Support</a>
      </div>
    </div>
    <div className="mt-1 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>&copy; 2025 Sod!umRdX. All rights reserved.</p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-white transition">Facebook</a>
        <a href="#" className="hover:text-white transition">Twitter</a>
        <a href="#" className="hover:text-white transition">GitHub</a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default footer
