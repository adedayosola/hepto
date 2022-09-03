import Image from "next/image";
import Link from "next/link";
import { logo, MenuIcon } from "assets";
import { useRouter } from 'next/router'

export const Navbar = () => {
    const router = useRouter()

    return (
        <nav className="flex flex-wrap justify-between items-center px-5  md:px-10 py-2 border-b border-b-[#000000]/80 bg-[#E5E5E5]/25">
            <div className="flex items-center">
                <Link href="/">
                    <a className="text-2xl font-bold text-primary-500">
                        <Image src={logo} alt="logo" width={130} height={50} />
                    </a>
                </Link>
            </div>
            <div className="flex flex-wrap items-center justify-between w-full md:w-auto md:justify-center md:gap-5">
                <Link href="/home">
                    <a className={`${router.pathname === "/home" ? 'text-primary-500' : 'text-black/80'} hover:text-primary-500/80 font-medium text-sm md:text-lg`}>
                        Home
                    </a>
                </Link>
                <Link href="/preferences">
                    <a className={`${router.pathname === "/preferences" ? 'text-primary-500' : 'text-black/80'} hover:text-primary-500/80 font-medium text-sm md:text-lg`}>
                        Preferences
                    </a>
                </Link>
                <Link href="/meal-plan">
                    <a className={`${router.pathname === "/meal-plan" ? 'text-primary-500' : 'text-black/80'} hover:text-primary-500/80 font-medium text-sm md:text-lg`}>
                        Meal Plan
                    </a>
                </Link>
                <Link href="/log">
                    <a className={`${router.pathname === "/log" ? 'text-primary-500' : 'text-black/80'} hover:text-primary-500/80 font-medium text-sm md:text-lg`}>
                        Log Food
                    </a>
                </Link>
            </div>
            <div className="flex justify-between w-full lg:w-auto mt-2 lg:mt-0 items-center">
                <form action="" method="post" className="w-full">
                    <div className="relative  md:mr-40 mr-5">
                        <input type="text" placeholder="Search..." className="bg-black/20 h-10 lg:h-12 px-3 focus:border-black/40 w-full focus:outline-none text-black/30 rounded-lg" />

                        <span className="absolute inset-y-0 right-3 flex items-center pl-3">
                            <svg className="h-7 w-7 fill-black/60" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                height="30" viewBox="0 0 30 30">
                                <path
                                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </form>

                <Image src={MenuIcon} alt="logo" width={50} height={50} className="rounded-full cursor-pointer" />
            </div>
        </nav>
    )
}