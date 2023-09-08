import Link from "next/link"
import { CustomeButton } from "."
import Image from "next/image"

function NavBar() {
    return (
        <header
            className="w-full z-10">
            <nav
                className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6">
                <Link
                    href={'/'}
                    className="flex justify-center items-center" />
                <Image
                    src={'/logo.svg'}
                    alt="Car Hub Logo"
                    width={120}
                    height={20}
                />

            </nav>
        </header>
    )
}

export default NavBar