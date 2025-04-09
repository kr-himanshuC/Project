import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {

    const router = useRouter();
    const { data: session, status } = useSession();
    console.log("🚀 ~ session:", session)

    const role = session?.user.role

    return (

        <aside id="default-sidebar" className=" top-0 left-0 z-40 w-[15%] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto  dark:bg-gray-800">
                {role === "USER" ?
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg> */}
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home/appliedJobs" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Applied Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home/profile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Profile</span>
                            </Link>
                        </li>
                    </ul>

                    :
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link href="/home/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg> */}
                                <span className="ms-3">Admin Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home/admin/postjobs" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Post Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home/admin/profile" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Profile</span>
                            </Link>
                        </li>
                    </ul>
                }

                <div className=" mx-3 self-end hover:cursor-pointer" onClick={() => {
                    signOut({ redirect: false }),
                        router.push('/')
                }}
                >
                    Log Out
                </div>
            </div>


        </aside>

    )
}

export default Sidebar