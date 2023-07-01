import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBarBottom = () => {
	return (
		<header className="w-full z-10 bg-mulberry-400">
			<nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<Link
					href="/"
					className="flex justify-center items-center"
				></Link>
			</nav>
		</header>
	);
};

export default NavBarBottom;
