import * as React from "react";
import Divider from "../components/Divider";
import myPhoto from "../images/me.png";
import projectsIcon from "../images/3d/projects.png";
import experienceIcon from "../images/3d/experience.png";
import miscIcon from "../images/3d/misc.png";
import Projects from "../components/Projects";

const IndexPage = () => {
    return (
        <main>
            <div className="absolute z-1 top-0 left-0 w-48 h-48 rounded-full blur-3xl bg-gradient-to-bl from-blue-500 to-green-500" />

            <div className="container p-3 z-2">
                <div className="flex flex-row items-center place-content-center mt-16">
                    <img alt="Fillip Serov" className="rounded-full p-1.5 w-40 h-40 ring-2 ring-gray-500 mr-3" src={myPhoto} />
                    <div>
                        <h1 className="text-6xl font-extrabold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                                Fillip<br />Serov
                            </span>
                        </h1>
                        <h3 className="text-2xl font-extrabold text-gray-500">
                            Software Engineer
                        </h3>
                    </div>
                </div>
                <div className="text-gray-200 mt-6 indent-8">
                    Hi, I&apos;m a second year student studying Software Engineering in Swansea, Wales.

                    I taught myself programming a few years ago and loved it, and it is now a huge passion of mine. University has complemented my practical skills with good theoretical knowledge, as well as giving me many opportunities to work together with people.
                </div>

                <Divider title={"Projects"} icon={projectsIcon} textColorVariant="blue" />

                <Projects />

                <Divider title={"Experience"} icon={experienceIcon} textColorVariant="purple" />

                <Divider title={"Contact"} icon={miscIcon} textColorVariant="red" />
            </div>
        </main>
    );
};

export default IndexPage;
