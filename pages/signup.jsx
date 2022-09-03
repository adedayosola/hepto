import Link from "next/link";
import { AuthLayout } from "components";
import { useRouter } from "next/router";

export default function SignUp () {

    const router = useRouter()

    const handleSubmit = ( e ) => {
        e.preventDefault();
        router.push( "/home" )
    }
    return (
        <AuthLayout title="Sign Up">
            <form onSubmit={handleSubmit} method="post">
                <div className='my-5'>
                    <label htmlFor="firstName" className='font-medium text-sm'>First Name</label>
                    <input type="text" name="firstName" className={`border border-primary-500 shadow-box w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="firstName" />
                </div>

                <div className='my-5'>
                    <label htmlFor="email" className='font-medium text-sm'>Email</label>
                    <input type="email" name="email" className={`border border-primary-500 shadow-box w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="email" />
                </div>

                <div className='my-5'>
                    <label htmlFor="phone" className='font-medium text-sm'>Phone Number</label>
                    <input type="text" name="phone" className={`border border-primary-500 shadow-box w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="phone" />
                </div>

                <div className='my-5'>
                    <label htmlFor="password" className='font-medium text-sm'>Password</label>
                    <input type="password" name="password" className={`border border-primary-500 shadow-box w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="password" />
                </div>

                <div className='my-5'>
                    <label htmlFor="confirmPassword" className='font-medium text-sm'>Confirm Password</label>
                    <input type="password" name="confirmPassword" className={`border border-primary-500 shadow-box w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="confirmPassword" />
                </div>

                <div className='my-5 md:text-right'>
                    <button type="submit" className={` rounded-lg h-10 focus:border-gray focus:outline-none  bg-primary-500 text-white px-11 font-medium uppercase hover:bg-primary-500/90`}>Sign Up</button>
                </div>
            </form>
            <div className="">

                <span className="font-medium text-sm"> Already have an account?</span> {" "}
                <Link href={"/"} >
                    <a className='text-primary-500 hover:text-primary-500/90 underline font-medium text-sm'>
                        Sign in
                    </a>
                </Link>
            </div>
        </AuthLayout>
    )
}
