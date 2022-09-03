import { Layout } from "components";
import { recipeFood } from "assets";
import Image from "next/image";
import { Button } from "../components";

export default function Home () {
    return (
        <Layout title="Home">
            <div className="bg-[#E5E5E5]/25 min-h-screen">
                <section className="px-5 md:px-20">
                    <h1 className="font-bold text-3xl pt-3 text-primary-500">
                        Welcome Shiv
                    </h1>
                </section>
                <section className="text-center mt-10 px-10">
                    <div className="hidden md:block">
                        <Image src={recipeFood} alt="Picture of the author" width={250} height={250} />
                    </div>
                    <div className="md:hidden">
                        <Image src={recipeFood} alt="Picture of the author" width={150} height={150} />
                    </div>
                    <h3 className="font-bold text-2xl mt-5">
                        My Recipe
                    </h3>
                    <p className="mt-10 text-lg font-medium">
                        The meal of your choice will be prepared for you if you submit a description.
                    </p>
                    <div className="mt-20">
                        <Button as="Link" href="/preferences" text="Create a recipe" className="rounded-xl h-[3.325rem]" />
                    </div>
                </section>
            </div>
        </Layout>
    )
}
