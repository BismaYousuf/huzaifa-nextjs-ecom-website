export function ProductImage() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
      {/* Product Mockup */}
      <div className="relative z-10">
        {/* Phone/Device Mockup */}
        <div className="w-64 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 p-6">
              <div className="text-white space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM10 18a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="w-32 h-4 bg-white/30 rounded mb-2"></div>
                  <div className="w-24 h-3 bg-white/20 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-white/20 rounded"></div>
                  <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                  <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-yellow-300/20 rounded-full blur-lg"></div>

      {/* Floating Icons */}
      <div className="absolute top-16 right-16 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>

      <div className="absolute bottom-32 left-16 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
  )
}
