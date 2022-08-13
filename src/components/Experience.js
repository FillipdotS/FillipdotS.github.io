import * as React from "react";

const Experience = ({ icon, name, roleName, timeText }) => {
	return (
		<div className="flex flex-row items-center gap-4">
			<img className="w-24 h-24 p-1 border-2 rounded-tr-lg rounded-bl-lg  border-x-purple-600 border-y-indigo-600" src={icon}></img>
			<div>
				<h4 className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">{name}</h4>
				<h3 className="text-2xl font-extrabold text-gray-200">
					{roleName}
				</h3>
				<h4 className="text-xl font-extrabold text-gray-500">{timeText}</h4>
			</div>
		</div>
	);
};

export default Experience;