export const IngredientCheckList = ( { items, name, selectedItems = [] } ) => {
    return (
        <div className="bg-white/70 rounded-xl p-3">
            {
                items.map( ( item, index ) => (
                    <label htmlFor={`${name}-${item}`} key={index} className=" hover:bg-[#616161]/20 p-2 rounded-lg flex items-center">
                        <input type="checkbox" defaultChecked={selectedItems.includes( item ) ? true : false} name={name} id={`${name}-${item}`} value={item} className="mr-3 h-5 w-5 accent-[#616161]" />
                        <span>
                            {item}
                        </span>
                    </label>
                ) )
            }

        </div>
    )
}