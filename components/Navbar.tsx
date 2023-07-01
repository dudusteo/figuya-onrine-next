import Link from "next/link";
import Image from "next/image";
import AuthProviders from "./AuthProviders";
import { getCurrentCustomer } from "@/lib/session";

const Navbar = async () => {
	const session = await getCurrentCustomer();

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
				{session?.user ? (
					<>
						{session?.user?.image && (
							<Image
								src={session.user.image}
								width={40}
								height={40}
								className="rounded-full"
								alt={session.user.firstName}
							/>
						)}
					</>
				) : (
					<AuthProviders />
				)}
			</nav>
			<nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-mulberry-400">
				<Link href="/"></Link>
			</nav>
		</header>
	);
};

export default Navbar;
