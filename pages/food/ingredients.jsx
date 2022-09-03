import Link from "next/link";
import Image from "next/image";
import { Layout } from "components";
import { Clock } from "assets";


export default function MealIngredients () {
    return (
        <Layout title="Ingredients">
            <div className="bg-[#E5E5E5]/25 min-h-screen">
                <section className="px-4 md:px-10 bg-food1 bg-no-repeat h-64 bg-cover pb-2 bg-center flex justify-between flex-col">
                    <div className="flex justify-between">
                        <Link href="/meal">
                            <a className="text-5xl font-bold text-black">
                                &lt;
                            </a>
                        </Link>
                        <Link href="/food/preparation">
                            <a className="text-5xl font-bold text-black">
                                &gt;
                            </a>
                        </Link>
                    </div>
                    <h1 className="text-primary-500 font-bold block mt-3 text-4xl"> Indian Potato and Lentil Stew</h1>
                </section>

                <section className="px-4 md:px-10">
                    <div className="text-primary-500/50 text-2xl font-bold mt-1  flex items-center">
                        <Image src={Clock} alt="food" width={20} height={20} />
                        <span className="ml-3">45 mins</span>
                    </div>
                    <h1 className="text-primary-500 font-bold block mt-3 text-3xl">Ingredients</h1>
                    <p className="text-xl text-primary-500"> Per 1 Serving</p>
                    <div className="md:w-1/2 border rounded-3xl border-[#D9D9D9] pb-10 mt-5">

                        <div className="flex gap-3 border-b border-b-[#D9D9D9] p-5">
                            <div className={`h-5 w-5 rounded-full bg-primary-500`}></div>
                            <span className={`text-black`}>1 tablespoon garlic-infused olive oil</span>
                        </div>

                        <div className="flex gap-3 border-b border-b-[#D9D9D9] p-5">
                            <div className={`h-5 w-5 rounded-full bg-primary-500`}></div>
                            <span className={`text-black`}>1 tablespoon ginger root, peeled and grated</span>
                        </div>

                        <div className="flex gap-3 border-b border-b-[#D9D9D9] p-5">
                            <div className={`h-5 w-5 rounded-full bg-primary-500`}></div>
                            <span className={`text-black`}>3 1/4 teaspoons curry powder</span>
                        </div>

                        <div className="flex gap-3 border-b border-b-[#D9D9D9] p-5">
                            <div className={`h-5 w-5 rounded-full bg-primary-500/60`}></div>
                            <span className={`text-black/60`}>1 1/2 teaspoons garam masala</span>
                        </div>

                        <div className="flex gap-3 border-b border-b-[#D9D9D9] p-5">
                            <div className={`h-5 w-5 rounded-full bg-primary-500/40`}></div>
                            <span className={`text-black/40`}>1 14.5-ounch can diced tomatoes, undrained</span>
                        </div>

                        <div className="flex gap-3 border-b border-b-[#D9D9D9] p-5">
                            <div className={`h-5 w-5 rounded-full bg-primary-500/20`}></div>
                            <span className={`text-black/20`}>1 cup of water</span>
                        </div>

                        <div className="text-center p-5">
                            <Link href="#">
                                <a className="text-3xl font-bold text-primary-500">
                                    Show More
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
