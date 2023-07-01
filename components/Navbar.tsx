import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const session = null;

	return (
		<header className="w-full z-10 ">
			<nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-mulberry-500">
				<Link href="/">
					<Image
						alt="Figuya Onrine Logo"
						src="/logo.svg"
						width={127}
						height={68}
						className="h-auto"
					/>
				</Link>
			</nav>
			<nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-mulberry-400">
				<Link href="/"></Link>
			</nav>
		</header>
	);
};

export default Navbar;
