import * as React from "react";
import unityIcon from "../images/tech/unity.png";
import Experience from "./Experience";

const Experiences = () => {
	return (
		<div>
			<Experience
				icon={unityIcon}
				name="Unity"
				roleName="Full Stack Software Engineer Intern"
				timeText={"July'21 - June'22"}
			/>
		</div>
	);
}

export default Experiences;