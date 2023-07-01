import Link from "next/link";
import Image from "next/image";

const NavBarTop = () => {
	return (
		<header className="w-full z-10 bg-mulberry-500">
			<nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<Link href="/" className="flex justify-center items-center">
					<Image
						alt="Figuya Onrine Logo"
						src="/logo.svg"
						width={127}
						height={68}
					/>
				</Link>
			</nav>
		</header>
	);
};

export default NavBarTop;
