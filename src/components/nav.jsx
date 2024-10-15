export default function Navbar() {
  return (
    <div>
      <div className="hidden lg:flex justify-center h-1/6 relative z-10  text-white text-xl">
        <div className="w-full flex justify-between px-20 py-8">
          <div className="font-clicker text-4xl ">Flavor Layer </div>
          <div className="flex  text-center items-center gap-14">
            <p className="text-xl">Home</p>
            <p className="text-xl">Menu</p>
            <p className="text-xl">About Us</p>
            <p className="text-xl">Contact Us</p>
          </div>
          <div className="flex items-center  gap-8">
            <button className="">login In</button>
            <button className="rounded-3xl px-4 py-2 bg-[#F9C06A] text-black">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-5 pt-5 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10 text-white relative z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}
