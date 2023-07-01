import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
	return (
		<div>
			<div>
				<CustomButton
					title="Button"
					containerStyles="bg-mulberry-500  text-white"
				/>
			</div>
		</div>
	);
};

export default Hero;
