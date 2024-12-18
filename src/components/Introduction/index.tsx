import { Center, Group, Paper, Stack, Text, Title } from "@mantine/core";
import type { PropsWithChildren, ReactNode } from "react";
import { useIsLight } from "~/hooks/theme";
import { CodePreview } from "../CodePreview";
import { Icon } from "../Icon";

export interface IntroductionProps {
	title: string;
	icon: string;
	header?: ReactNode;
	snippet?: {
		title?: string;
		code: string;
		language: string;
	};
}

export function Introduction({
	title,
	icon,
	header,
	snippet,
	children,
}: PropsWithChildren<IntroductionProps>) {
	const isLight = useIsLight();

	return (
		<Center
			h="100%"
			flex={1}
		>
			<Paper
				w={450}
				style={{ overflow: "hidden" }}
				shadow="md"
			>
				{header}
				<Stack
					p="xl"
					gap="xl"
				>
					<Group>
						<Icon
							path={icon}
							size={1.35}
						/>
						<Title c="bright">{title}</Title>
					</Group>
					{children}
				</Stack>
				{snippet?.code && (
					<Paper
						p="xl"
						bg={isLight ? "white" : "slate.7"}
						radius={0}
						shadow="none"
						style={{
							borderTop: isLight
								? "1px solid var(--mantine-color-slate-1)"
								: undefined,
						}}
					>
						<Text
							c="bright"
							fz={18}
							fw={600}
							mb="md"
						>
							{snippet.title ?? "Example"}
						</Text>
						<CodePreview
							bg="transparent"
							padding={0}
							value={snippet.code}
							language={snippet.language}
							withDedent
						/>
					</Paper>
				)}
			</Paper>
		</Center>
	);
}
