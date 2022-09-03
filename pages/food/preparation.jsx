import Link from "next/link";
import Image from "next/image";
import { Layout } from "components";
import { Clock } from "assets";


export default function MealPreparation () {
    return (
        <Layout title="Preparation">

            <div className="bg-[#E5E5E5]/25 min-h-screen">
                <section className="px-4 md:px-10 bg-food1 bg-no-repeat h-64 bg-cover pb-2 bg-center flex justify-between flex-col">
                    <div className="flex justify-between">
                        <Link href="/food/ingredients">
                            <a className="text-5xl font-bold text-black">
                                &lt;
                            </a>
                        </Link>
                    </div>
                    <h1 className="text-primary-500 font-bold block mt-3 text-4xl"> Indian Potato and Lentil Stew</h1>
                </section>

                <section className="px-4 md:px-10 pb-20">
                    <div className="text-primary-500/50 text-2xl font-bold mt-1  flex items-center">
                        <Image src={Clock} alt="food" width={20} height={20} />
                        <span className="ml-3">45 mins</span>
                    </div>
                    <h1 className="text-primary-500 font-bold block mt-3 text-3xl">Preparation</h1>
                    <div className=" border rounded-3xl border-[#D9D9D9] p-5 mb-10 mt-5">

                        <div className="relative gap-3 p-5 pl-10">
                            <div className={`absolute left-2 h-6 w-6 rounded-full border-2  border-primary-500`}></div>
                            <span className={`text-black`}>
                                In a stockpot, warm the oil over medium - high heat. Add the ginger and stir for 30 seconds. Add the curry powder and garam masala and stir continuously until spices are fragrant and have turned a shade darker, and 1 minute.
                                Add the tomatoes and water and scrape the pot to loosen any spices that have stuck to the bottom.
                            </span>
                        </div>

                        <div className="relative gap-3 p-5 pl-10">
                            <div className={`absolute left-2 h-6 w-6 rounded-full border-2  border-primary-500`}></div>
                            <span className={`text-black`}>Add the potatoes, sweet potatoes, carrots, lentils, and salt. Cover the pot, bring to a boil, and then reduce the heat. simmer until the potatoes are nearly cooked through but are not quite fork tender about 12 to 15 minutes.</span>
                        </div>

                        <div className="relative gap-3 p-5 pl-10">
                            <div className={`absolute left-2 h-6 w-6 rounded-full border-2  border-primary-500`}></div>
                            <span className={`text-black`}>Add the green beans, replace the lid, and continue cooking until green beans are tender and potatoes and carrots are soft about 5 minutes.</span>
                        </div>

                        <div className="relative gap-3 p-5 pl-10">
                            <div className={`absolute left-2 h-6 w-6 rounded-full border-2  border-primary-500`}></div>
                            <span className={`text-black`}>Stir in the coconut milk and simmer uncovered for about 2 minutes to allow the flavors to blend. serve over warm basmati rice.</span>
                        </div>

                    </div>
                </section>
            </div>
        </Layout>
    )
}
