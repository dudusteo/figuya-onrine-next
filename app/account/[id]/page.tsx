import React from "react";

const Account = ({ params }: { params: { id: string } }) => {
	return <div>ID: {params.id}</div>;
};

export default Account;
