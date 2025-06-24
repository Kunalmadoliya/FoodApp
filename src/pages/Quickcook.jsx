import React from 'react'

function Quickcook() {
  return (
    <div className='w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center'>
      <div className="bg-white rounded-lg p-10 flex flex-col items-center text-center justify-center shadow-sm mt-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-gray-400 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v12m6-6H6"
    />
  </svg>
  <h3 className="text-lg font-semibold text-gray-800 mb-1">
    Coming Soon
  </h3>
  <p className="text-gray-500">
    This feature will be available in a future update.
  </p>
</div>

    </div>
  )
}

export default Quickcook
