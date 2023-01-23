import * as React from "react";
import Project from "../components/Project";
import coronaTravelerImage from "../images/projects/corona-traveler.png";
import xmrBotImage from "../images/projects/xmr-bot.png";
import ctscanImage from "../images/projects/ctscan.gif";
import goldbergsImage from "../images/projects/goldbergshouse.png";
import shambotImage from "../images/projects/shambot_graph.png";
import firenewsImage from "../images/projects/firenews.png";
import {
    AndroidTech,
    AWSTech,
    CSharp,
    Django,
    FirebaseTech,
    Java,
    Javascript,
    KotlinTech,
    NodeJs,
    PostgresTech,
    PythonTech,
    ReactTech,
    Unity
} from "./Techs";
import classNames from "classnames";

const Projects = () => {
    const listStyle = classNames("list-disc", "pl-4", "font-semibold");

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Project
                title="ShamBot"
                image={shambotImage}
                techs={[Javascript, NodeJs, AWSTech, PostgresTech]}
                githubLink="https://github.com/FillipdotS/shambot"
            >
                An exercise in setting up a nodejs application the 'proper' way with AWS, Docker, and more. The actual application is a simple discord bot.
                <ul className={listStyle}>
                    <li>Hosted on AWS</li>
                    <li>Uses Github Actions to redeploy</li>
                    <li>Local development with Docker</li>
                </ul>
            </Project>
            <Project
                title="FireNews"
                image={firenewsImage}
                techs={[KotlinTech, AndroidTech, FirebaseTech]}
                githubLink="https://github.com/FillipdotS/FireNews"
            >
                Android news aggregator app. Supports accounts and sending notifications when new articles are available that match a users interests.
                <ul className={listStyle}>
                    <li>Dependency injection</li>
                    <li>Jetpack Compose</li>
                    <li>Material3</li>
                </ul>
            </Project>
            <Project
                title="Corona Traveler"
                image={coronaTravelerImage}
                techs={[Javascript, ReactTech, PythonTech, Django]}
                githubLink="https://github.com/FillipdotS/corona-traveler"
            >
                An interactive map for coronavirus travel restrictions. Users choose their country and the map will show what other countries are open to them.
                <ul className={listStyle}>
                    <li>Was live for ~1 year</li>
                </ul>
            </Project>
            <Project
                title="CT Scanner"
                image={ctscanImage}
                techs={[Java]}
                githubLink="https://github.com/FillipdotS/ct-scan-renderer"
            >
                A program written in Java to take CT scan data (3D matrix of integer values) and provide several ways to render them.
                <ul className={listStyle}>
                    <li>Diffuse shading with moving light source</li>
                    <li>Volume rendering</li>
                    <li>Slice rendering</li>
                </ul>
            </Project>
            <Project
                title="Goldberg's House"
                image={goldbergsImage}
                techs={[CSharp, Unity]}
                githubLink="https://github.com/FillipdotS/GoldbergsHouse"
            >
                A 2D physics puzzle game made in Unity for a competition, winning 2nd place. Created in a two-person team, where my main responsibility was the programming
                <ul className={listStyle}>
                    <li>Large project that took six months to finish</li>
                </ul>
            </Project>
            <Project
                title="XMR Bot"
                image={xmrBotImage}
                techs={[Javascript, NodeJs]}
                githubLink="https://github.com/FillipdotS/xmr-bot"
                viewLink="https://steamcommunity.com/id/xmrkeybot"
            >
                This is a bot that would trade the Monero cryptocurrency for game items from the game Counter Strike: Global Offensive, and vice versa.
                <ul className={listStyle}>
                    <li>Ran on a VPS</li>
                    <li>Gave support to customers who had issues</li>
                </ul>
            </Project>
        </div>
    );
};

export default Projects;