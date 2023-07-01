import { Session, User } from "next-auth";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SessionInterface extends Session {
	user: User & {
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		avatarUrl: string;
	};
}

export interface UserProfile {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	avatarUrl: string;
}
