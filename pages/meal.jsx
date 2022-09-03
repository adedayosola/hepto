import Link from "next/link";
import Image from "next/image";
import { Layout } from "components";
import { Food1, Clock } from "assets";



export default function Meal () {

    return (
        <Layout title="Meal">

            <section className="px-4 md:px-10 bg-food-pan bg-no-repeat min-h-screen bg-cover pb-20 bg-center">

                <h1 className="font-bold text-2xl text-primary-500 pt-10">
                    Breakfast
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                    <div>
                        <Link href="/food/ingredients">
                            <a>
                                <Image src={Food1} alt="food" width={500} height={300} />
                                <p className="text-primary-500 font-bold block mt-3 text-xl"> Indian Potato and Lentil Stew</p>
                            </a>
                        </Link>
                        <div className="text-primary-500/50 text-xl font-bold mt-1 flex items-center">
                            <Image src={Clock} alt="food" width={20} height={20} />
                            <span className="ml-3">45 mins</span>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
