import { Layout, Button, IngredientCheckList } from "components";
import { useRouter } from "next/router";

const ingredients = [
    {
        name: "checklist1",
        items: [ "Mango powder", "Rice", "Cinnamon", "Cardamom", "Nutmeg", "Cloves", "Garam masala", "Cumin", "Fresh curry leaves", "Tumeric", "Coriander", "Mustard seeds", "Chaat masala", "Tamarind" ],
        selectedItems: [ "Rice", "Garam masala" ]
    },
    {
        name: "checklist2",
        items: [ "Fenugreek", "Fennel", "Ajwain", "Fennel seeds", "Indian bay leaves", "Dried chiles", "Star anise", "Asafetida", "Soy sauce", "Mung beans", "Chickpeas", "Black lentils", "Naan", "Split yellow pigeon peas" ]
    },
    {
        name: "checklist3",
        items: [ "Raisins", "Cheese", "Paneer", "Rajmas", "Flour", "Wheat", "Fish", "Black pepper", "Salt", "Egg", "Ginger", "Jeera", "Hing", "Black pepper" ],
        selectedItems: [ "Salt", "Ginger" ]
    },
    {
        name: "checklist4",
        items: [ "Vegetable oil", "Mung beans", "Basmati rice", "Paneer", "Yogurt", "Ghee", "Dessicated coconut", "Pickles", "Mustard oil", "Coconut milk", "Coconut oil", "Curry", "Potato", "Sweet potato" ],
        selectedItems: [ "Coconut milk", "Curry", "Potato", "Sweet potato" ]
    },
    {
        name: "checklist5",
        items: [ "Tomato", "Red chilli powder", "Onions", "Panch phutan", "Kasturi methi", "Mint leaves", "Coriander leaves", "Capsicum", "Asafoetida", "Garlic", "Milk", "Green chilli", "Saffron", "Cashenut" ],
        selectedItems: [ "Tomato", "Garlic" ]
    },
    {
        name: "checklist10",
        items: [ "Prawns", "Sugar", "Olive oil", "Carrot", "Lentils", "Dried amla", "Soda", "Curd", "Chole masala", "Chicken", "Green beans", "Green peas", "Vegetables", "Meat" ],
        selectedItems: [ "Carrot", "Lentils", "Green beans" ]
    }
]

export default function Ingredients () {

    const router = useRouter()

    const handleSubmit = ( e ) => {
        e.preventDefault();
        router.push( "/meal" )
    }

    return (
        <Layout title="Preferences">

            <section className="px-4 md:px-10 bg-food-pan bg-no-repeat bg-cover pb-20 bg-center">

                <h1 className="font-bold text-4xl text-black pt-10">
                    Ingredients Checklist
                </h1>
                <form onSubmit={handleSubmit} method="post">
                    <div className="pt-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-5">
                            {
                                ingredients.map( ( ingredient, index ) => (
                                    <IngredientCheckList selectedItems={ingredient.selectedItems} items={ingredient.items} key={index} name={ingredient.name} />
                                )
                                )
                            }
                        </div>
                    </div>

                    <div className="mt-10  text-center">
                        <Button type="submit" className={"font-bold text-xl h-14"} text="Send Request" />
                    </div>
                </form>
            </section>

        </Layout>
    )
}
