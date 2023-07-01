"use client";

import { SessionInterface } from "@/common.types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
	return (
		<div>
			{session?.user?.image && (
				<Link href={`/account/${session?.user?.id}`}>
					<Image
						src={session.user.image}
						width={40}
						height={40}
						className="rounded-full"
						alt={session.user.firstName}
					/>
				</Link>
			)}
			<button type="button" onClick={() => signOut()}>
				Sign Out
			</button>
		</div>
	);
};

export default ProfileMenu;
