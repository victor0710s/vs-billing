export function AuthContainer({ children }) {
  return (
    <div className="bg-gray-400/50 w-1/2 xl:w-1/4 h-110 rounded-xl backdrop-blur-md border border-white/70 shadow-2xl p-5 flex gap-3">
      <div className="w-full h-full px-4 pt-4 pb-0 flex flex-col">
        {children}
      </div>
    </div>
  )
}
