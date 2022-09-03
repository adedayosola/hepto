import Link from "next/link"
export const Button = ( { type = "button", className, text, as = "button", href = "#" } ) => {
    return (
        <>
            {as === "button" && (
                <button type={type} className={`rounded-lg h-10 focus:border-gray focus:outline-none  bg-primary-500 text-white px-11 font-medium  hover:bg-primary-500/90 ${className}`}>{text}</button> )
            }

            {as === "Link" && (
                <Link href={href}>
                    <a className={`rounded-lg py-4 focus:border-gray focus:outline-none  bg-primary-500 text-white px-11 font-medium  hover:bg-primary-500/90 ${className}`}>{text}</a>
                </Link>
            )
            }

        </>
    )
}