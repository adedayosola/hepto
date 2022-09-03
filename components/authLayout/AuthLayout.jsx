import Image from "next/image";
import { logo } from "assets";
import styles from '../../styles/auth.module.scss'
import { Layout } from "components";

export const AuthLayout = ( { title, children } ) => {
    return (
        <Layout navbar={false} title={title}>
            <div >
                <main>
                    <div className='md:flex w-screen min-h-screen'>
                        <div className={`min-h-screen bg-no-repeat bg-cover md:w-1/2 hidden md:inline-block ${styles.authBg}`}></div>
                        <div className={`p-4 md:p-4 ${styles.authAreaBg} bg-[#E5E5E5] bg-blend-overlay min-h-screen flex flex-col items-center gap-2 md:w-1/2`}>
                            <div className=''>
                                <Image src={logo} alt='logo' height={130} width={201} />
                            </div>

                            <div className='w-10/12 md:w-7/12 mx-auto'>
                                {children}
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}
