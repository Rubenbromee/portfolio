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
					backgroundColor={"white"}
					alignItems={"center"}
					flexDirection={"column"}
					border={"1px solid #D3D3D3"}
					boxShadow={"5px 5px 3px 0px rgba(212,212,212,0.75)"}
					padding={"10px"}
				>
					<Flex maxW={"225px"} textAlign={"center"}>
						<Text size={"lg"} marginY={"10px"}>
							{project.name}
						</Text>
					</Flex>
					<Flex
						maxW={"200px"}
						maxH={"200px"}
						w={"100%"}
						h={"100%"}
						justifyContent={"center"}
						alignItems={"center"}
					>
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
			<SimpleGrid columns={3} gap={"20px"}>
				{renderProjects()}
			</SimpleGrid>
		</Flex>
	);
};

export default App;
