import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";

export type Project = {
	name: string;
	description: string;
	link: string;
	image: string;
};

type Props = {
	project?: Project;
	open: boolean;
	onClose: () => void;
};

const ProjectModal: React.FC<Props> = ({ project, open, onClose }: Props) => {
	const openLink = () => {
		window.open(project?.link);
	};

	return (
		<>
			{project && (
				<Modal isOpen={open} onClose={onClose}>
					<ModalOverlay />
					<ModalContent padding={"25px"} w={"80%"}>
						<ModalHeader>{project.name}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Text>{project.description}</Text>
							<Button
								colorScheme={"blue"}
								marginY={"15px"}
								onClick={openLink}
							>
								Project
							</Button>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</>
	);
};

export default ProjectModal;
