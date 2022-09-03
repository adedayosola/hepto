import { useState } from "react";
import Link from "next/link";
import { Layout, PreferenceItem } from "components";

const recent = {
    name: "recent",
    items: [ "Breakfast" ]
}
const courses = {
    name: "course",
    items: [ "Breakfast", "Lunch", "Dinner" ]
}
const preparationTime = {
    name: "preparationTime",
    items: [ "< 15 minutes", "15-30 minutes", "30-60 minutes", "60-90 minutes", "> 90 minutes", "Overnight" ]
}
const dietaryPeferences = {
    name: "dietaryPeferences",
    items: [ "Vegetarian", "Glutten-free", "Vegan", "Halal", "No preference" ]
}
const allergies = {
    name: "allergies",
    items: [ "Egg", "Milk", "Soy", "Peanuts", "Trea nut", "Shellfish", "No allergies" ]
}
const cuisines = {
    name: "cuisines",
    items: [ "Indian" ]
}

export default function Preferences () {
    const [ selectedCourse, setSelectedCourse ] = useState( "Breakfast" );
    const [ selectedPreparationTime, setSelectedPreparationTime ] = useState( "30-60 minutes" );
    const [ selectedRecent, setSelectedRecent ] = useState( "Breakfast" );
    const [ selectedDietaryPeferences, setSelectedDietaryPeferences ] = useState( "Vegetarian" );
    const [ selectedAllergies, setSelectedAllergies ] = useState( "" );
    const [ selectedCuisines, setSelectedCuisines ] = useState( "Indian" );

    return (
        <Layout title="Preferences">
            <section className="px-4 md:px-10 bg-food-pan bg-no-repeat bg-cover pb-20 bg-center">
                <div className="pt-12">
                    <p>
                        <span className="font-medium text-lg">Recent</span>
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-10 md:gap-10 xl:gap-20 mt-5">
                        {
                            recent.items.map( ( item, index ) => (
                                <PreferenceItem active={selectedRecent} key={index} name={recent.name} value={item} onChange={e => setSelectedRecent( e.target.value )} />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="mt-12">
                    <p>
                        <span className="font-medium text-lg">By Courses</span>
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-10 md:gap-10 xl:gap-20 mt-5">
                        {
                            courses.items.map( ( course, index ) => (
                                <PreferenceItem active={selectedCourse} key={index} name={courses.name} value={course} onChange={e => setSelectedCourse( e.target.value )} />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="mt-12">
                    <p>
                        <span className="font-medium text-lg">By Preparation time</span>
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-10 md:gap-10 xl:gap-20 mt-5">
                        {
                            preparationTime.items.map( ( time, index ) => (
                                <PreferenceItem active={selectedPreparationTime} key={index} name={preparationTime.name} value={time} onChange={e => setSelectedPreparationTime( e.target.value )} />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="mt-12">
                    <p>
                        <span className="font-medium text-lg">Dietary Preferences</span>
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-10 md:gap-10 xl:gap-20 mt-5">
                        {
                            dietaryPeferences.items.map( ( item, index ) => (
                                <PreferenceItem active={selectedDietaryPeferences} key={index} name={dietaryPeferences.name} value={item} onChange={e => setSelectedDietaryPeferences( e.target.value )} />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="mt-12">
                    <p>
                        <span className="font-medium text-lg">Allergies</span>
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-10 md:gap-10 xl:gap-20 mt-5">
                        {
                            allergies.items.map( ( item, index ) => (
                                <PreferenceItem active={selectedAllergies} key={index} name={allergies.name} value={item} onChange={e => setSelectedAllergies( e.target.value )} />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="mt-12">
                    <p>
                        <span className="font-medium text-lg">Cuisines</span>
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-10 md:gap-10 xl:gap-20 mt-5">
                        {
                            cuisines.items.map( ( item, index ) => (
                                <PreferenceItem active={selectedCuisines} key={index} name={cuisines.name} value={item} onChange={e => setSelectedCuisines( e.target.value )} />
                            )
                            )
                        }
                    </div>
                </div>
                <div className="mt-10  text-center">
                    <Link href="/ingredients">
                        <a className="text-center text-xl xl:text-3xl font-medium text-[#535353]">
                            Please select the key ingredients you have &gt;&gt;
                        </a>
                    </Link>
                </div>
            </section>

        </Layout>
    )
}
