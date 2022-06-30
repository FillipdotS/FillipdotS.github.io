import * as React from "react";
import PropTypes from "prop-types";
import TechStack from "./TechStack";
import classNames from "classnames";

const Project = ({ title, children, image, techs, githubLink, viewLink }) => {
    const buttonClasses = classNames("rounded-full", "p-2", "shadow-md", "shadow-blue-500/40", "hover:shadow-green-500/40", "text-gray-200", "bg-gradient-to-br", "from-green-500", "to-blue-500", "hover:from-blue-500", "hover:to-green-500");

    // Beware of terrible hardcoded values inside
    return (
        <div className="shrink-0 basis-full md:basis-[48.0%] lg:basis-[31.8783068%]">
            <div className="relative">
                <img alt={title} className="p-1 border-2 rounded-tr-lg rounded-bl-lg  border-x-blue-600 border-y-green-600" src={image} />
                <div className="absolute bottom-0 left-0 p-2 rounded-tr-lg rounded-bl-lg bg-gradient-to-br from-blue-600 to-green-600">
                    <h4 className="text-3xl font-bold text-gray-200">
                        {title}
                    </h4>
                </div>
                <div className="absolute bottom-0 right-0 m-3 flex flex-row gap-2">
                    {viewLink &&
                        <a href={viewLink} className={buttonClasses}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    }
                    {githubLink &&
                        <a href={githubLink} className={buttonClasses}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>}
                </div>
            </div>
            <TechStack techs={techs} />
            <div className="text-gray-200 font-light">
                {children}
            </div>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
    image: PropTypes.node.isRequired,
    githubLink: PropTypes.string,
    viewLink: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.node.isRequired,
    })).isRequired,
};

export default Project;