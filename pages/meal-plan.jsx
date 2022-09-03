import Image from "next/image";
import { Layout, Button } from "components";
import { Punjabi, Dum, Navratan } from "assets";


var curr = new Date();
var date = curr.toISOString().substring( 0, 10 );

export default function MealPlan () {
    return (
        <Layout title="Meal Plan">

            <section className="px-4 md:px-10 mb-20 bg-[#E5E5E5]/25 min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="text-primary-500 font-bold block pt-3 text-2xl md:text-3xl text-center uppercase"> Select Date</h1>
                    <input type="date" name="" defaultValue={date} className="text-primary-500 text-xl md:text-3xl font-medium mt-5 focus:border-0 focus:outline-none accent-primary-500 bg-transparent" id="" />
                </div>

                <div className="flex flex-col md:flex-row my-6">
                    <h3 className="text-black w-5/12 font-medium text-2xl pt-4">Breakfast</h3>
                    <div>
                        <Image src={Punjabi} alt="food" width={250} height={150} />
                        <p className="text-black text-xl font-medium">Punjabi choley</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                    <h3 className="text-black w-5/12 font-medium text-2xl pt-4">Lunch</h3>
                    <div>
                        <Image src={Dum} alt="food" width={250} height={150} />
                        <p className="text-black text-xl font-medium">Dum Biryani</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row my-6">
                    <h3 className="text-black w-5/12 font-medium text-2xl pt-4">Dinner</h3>
                    <div>
                        <Image src={Navratan} alt="food" width={250} height={150} />
                        <p className="text-black text-xl font-medium">Navratan korma</p>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <Button as="Link" href="/log" text="Log Serving" className="rounded-xl h-[3.325rem] md:px-36 font-bold text-xl md:text-3xl" />
                </div>
            </section>

        </Layout>
    )
}
