import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-white">
        <nav className="flex items-center text-primary font-bold">
            <Image src='/assets/img/logo.png' width={40} height={40} alt="logo" />
            SWEETER
        </nav>
        <div className="hero pt-5">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-primary text-6xl font-extrabold">SWEETER</h1>
                    <p className="text-primary text-xl py-4">The Sweetest Site</p>
                </div>
            </div>
        </div>
        </div>
    )
}