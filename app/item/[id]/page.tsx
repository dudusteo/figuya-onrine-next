import React from "react";

const Item = ({ params }: { params: { id: string } }) => {
	return <div>Item {params.id}</div>;
};

export default Item;
