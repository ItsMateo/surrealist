import { Box, Center, ScrollArea } from "@mantine/core";
import { HelpCenter } from "~/components/HelpCenter";
import classes from "./style.module.scss";

export function SupportPage() {
	return (
		<Box
			flex={1}
			pos="relative"
		>
			<ScrollArea
				pos="absolute"
				scrollbars="y"
				type="scroll"
				inset={0}
				className={classes.scrollArea}
			>
				<Center
					h="100%"
					maw={900}
					mx="auto"
					pb={75}
				>
					<HelpCenter />
				</Center>
			</ScrollArea>
		</Box>
	);
}

export default SupportPage;