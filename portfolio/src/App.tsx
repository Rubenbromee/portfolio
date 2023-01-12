import { Button } from "@chakra-ui/button";
import { Text, Flex, Link, SimpleGrid, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import projects from "./assets/projects.json";

const App: React.FC = () => {
	const renderProjects = () => {
		let renders: JSX.Element[] = [];
		projects.data.map((project) => {
			renders.push(
				<Flex
					w={"300px"}
					h={"300px"}
					borderRadius={"10px"}
					backgroundColor={"red"}
					alignItems={"center"}
					flexDirection={"column"}
				>
					<Text size={"lg"} marginY={"10px"}>
						{project.name}
					</Text>
					<Flex w={"225px"} h={"225px"} justifyContent={"center"}>
						<Image src={project.image} />
					</Flex>
				</Flex>
			);
		});
		return renders;
	};

	return (
		<Flex
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
		>
			<Text>Portfolio page of Ruben Bromée</Text>
			<Flex gap={"10px"}>
				<Link href={"mailto:ruben.bromee@gmail.com"}>
					ruben.bromee@gmail.com
				</Link>
				<Link href={"https://www.linkedin.com/in/ruben-brom%C3%A9e/"}>
					LinkedIn
				</Link>
				<Link href={"https://github.com/Rubenbromee"}>GitHub</Link>
			</Flex>
			<Button>CV</Button>
			<Text>Projects</Text>
			<SimpleGrid>{renderProjects()}</SimpleGrid>
		</Flex>
	);
};

export default App;
