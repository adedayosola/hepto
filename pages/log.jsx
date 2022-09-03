import Image from "next/image";
import Link from "next/link";
import { Layout } from "components";
import { WriteIcon, EditIcon, CloseIcon } from "assets";


const logs = [
    {
        col1: "Punjabi Choley",
        col2: "Vegan",
    },
    {
        col1: "Navratan korma",
        col2: "Vegetarian",
    },
    {
        col1: "Dum Biryani",
        col2: "Non-vegetarian",
    },
    {
        col1: "Indian potato and lentil stew",
        col2: "Vegetarian",
    },
    {
        col1: "Poha",
        col2: "Glutten-free",
    },
    {
        col1: "Mutton kofte",
        col2: "Non-vegetarian",
    },
    {
        col1: "Rogan josh",
        col2: "Non-vegetarian",
    },
    {
        col1: "Cauliflower shorba ",
        col2: "Glutten-free",
    },
    {
        col1: "Chickpeas with poached eggs",
        col2: "Vegetarian",
    }
]
export default function Log () {
    return (
        <Layout title="Log">

            <section className="px-4 md:px-10 pb-20 bg-[#E5E5E5]/25 min-h-screen ">
                <div className="w-full flex justify-center flex-col items-center gap-5">
                    <form action="" method="post" className=" w-full md:w-8/12 pt-5">
                        <div className="relative  ">

                            <input type="input" placeholder="Type your Food" className="bg-primary-500/40 h-10 md:h-12 px-3 w-full focus:border-black/40 placeholder-gray-500 font-bold text-sm md:text-xl focus:outline-none text-black/30 rounded-lg" />

                            <span className="absolute inset-y-0 right-10 flex items-center pl-3">
                                <svg className="h-7 w-7 fill-black/60" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 30 30">
                                    <path
                                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                    </form>
                    <div className="w-full md:w-8/12 py-2 bg-white rounded-xl px-3 flex justify-around gap-6">
                        <Link href="">
                            <a className="flex gap-2 items-center">
                                <span className="hidden md:inline-block">
                                    <Image src={WriteIcon} alt="food" width={50} height={50} />
                                </span>
                                <span className="md:hidden">
                                    <Image src={WriteIcon} alt="write" width={20} height={20} />
                                </span>
                                <span className="text-primary-500 font-bold block md:mt-3 text-sm md:text-2xl">Add New Food
                                </span>
                            </a>
                        </Link>
                        <select name="" id="" className="border-0 focus:border-0 focus:outline-none w-50 text-sm md:text-2xl text-primary-500 font-bold">
                            <option value="">All</option>
                        </select>
                    </div>
                </div>

                <div className="border shadow-box rounded-3xl border-primary-500 pb-2 mt-5 bg-white">
                    <div className={`grid grid-cols-3 gap-3  px-5 py-3`}>
                        <div className="flex items-end font-medium md:font-bold text-sm md:text-2xl text-black/50">
                            Food&nbsp;Name
                        </div>
                        <div className="flex items-end font-medium md:font-bold text-sm md:text-2xl text-black/50">
                            Dietary&nbsp;Preference
                        </div>
                        <div className="text-center">

                        </div>
                    </div>
                    {
                        logs.map( ( log, index ) => (
                            <div key={index} className={`grid grid-cols-3 gap-3 ${index < logs.length - 1 ? 'border-b border-b-black/50' : ''} px-5 pt-3`}>
                                <div className="flex items-end">
                                    <Link href="/meal">
                                        <a className="md:font-bold text-sm md:text-2xl text-black hover:text-primary-500/80">
                                            {log.col1}
                                        </a>
                                    </Link>
                                </div>
                                <div className="md:font-bold text-sm md:text-2xl text-black flex items-end">{log.col2}</div>
                                <div className="flex justify-end gap-5 md:gap-10 ">
                                    <Link href="">
                                        <a>
                                            <Image src={CloseIcon} alt="food" width={50} height={50} />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <Image src={EditIcon} alt="food" width={50} height={50} />

                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ) )
                    }

                </div>
                <div className="flex justify-end gap-4 mt-2 items-center">
                    <span className="text-primary-500 text-xs">1-9 of 50</span>
                    <div>
                        <Link href="">
                            <a className="text-primary-500 font-bold text-3xl">
                                &lt;
                            </a>
                        </Link>
                        <Link href="">
                            <a className="text-primary-500 font-bold text-3xl ml-3 mr-5 md:mr-10">
                                &gt;
                            </a>
                        </Link>
                    </div>

                </div>
            </section>

        </Layout>
    )
}
