import { Button } from "@chakra-ui/button";
import { Text, Flex, Link, SimpleGrid, Image, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import projects from "./assets/projects.json";
import ProjectModal, { Project } from "./ProjectModal";

const App: React.FC = () => {
	const [openedProject, setOpenedProject] = useState<Project>();
	const onClose = () => {
		setOpenedProject(undefined);
	};

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
					onClick={() => setOpenedProject(project)}
					cursor={"pointer"}
				>
					<Flex maxW={"225px"} textAlign={"center"}>
						<Text fontSize={"lg"} marginY={"10px"}>
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
			<Heading size={"2xl"} marginTop={"25px"}>
				Portfolio page of Ruben Bromée
			</Heading>
			<Flex gap={"10px"} marginY={"25px"} alignItems={"center"}>
				<Link href={"mailto:ruben.bromee@gmail.com"} fontSize={"lg"}>
					ruben.bromee@gmail.com
				</Link>
				<Link
					onClick={() => {
						window.open(
							"https://www.linkedin.com/in/ruben-brom%C3%A9e/"
						);
					}}
					fontSize={"lg"}
				>
					LinkedIn
				</Link>
				<Link
					onClick={() =>
						window.open("https://github.com/Rubenbromee")
					}
					fontSize={"lg"}
				>
					GitHub
				</Link>
				<Button colorScheme={"blue"}>Get CV</Button>
			</Flex>
			<Heading size={"lg"}>Projects</Heading>
			<Flex marginY={"25px"}>
				<SimpleGrid columns={3} gap={"20px"}>
					{renderProjects()}
				</SimpleGrid>
			</Flex>
			{openedProject != undefined && (
				<ProjectModal
					project={openedProject}
					open={openedProject != undefined}
					onClose={onClose}
				/>
			)}
		</Flex>
	);
};

export default App;
