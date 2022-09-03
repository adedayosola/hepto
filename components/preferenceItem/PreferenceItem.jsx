export const PreferenceItem = ( { name, value, onChange, active } ) => {
    return (
        <span>
            <label htmlFor={`${name}-${value}`} className={`rounded-xl py-2 md:py-3 xl:py-4 focus:border-gray focus:outline-none ${active === value ? 'bg-primary-500' : 'bg-black/50'}  text-white 
            px-2 md:px-6 xl:px-11 font-medium  hover:bg-primary-500/90 cursor-pointer`}>
                <input type="radio" className="hidden" name={name} value={value} id={`${name}-${value}`} onChange={onChange} />
                <span>{value}</span>
            </label>
        </span>
    )
}