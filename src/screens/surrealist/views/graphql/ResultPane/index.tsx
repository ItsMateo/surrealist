import { Center, Stack, Text } from "@mantine/core";
import { surrealql } from "@surrealdb/codemirror";
import { useMemo } from "react";
import { CodeEditor } from "~/components/CodeEditor";
import { Icon } from "~/components/Icon";
import { ContentPane } from "~/components/Pane";
import { useConnectionAndView } from "~/hooks/routing";
import { useDatabaseStore } from "~/stores/database";
import { iconQuery } from "~/util/icons";

export function ResultPane() {
	const [connection] = useConnectionAndView();
	const response = useDatabaseStore((s) => s.graphqlResponse[connection ?? ""]);

	const extensions = useMemo(() => [surrealql()], []);

	return (
		<ContentPane
			title="Results"
			icon={iconQuery}
		>
			{response?.success ? (
				<CodeEditor
					ml="sm"
					value={response.result || ""}
					readOnly
					extensions={extensions}
				/>
			) : response ? (
				<Text c="red">{JSON.stringify(response.result)}</Text>
			) : (
				<Center
					h="100%"
					c="slate"
				>
					<Stack>
						<Icon
							path={iconQuery}
							mx="auto"
							size="lg"
						/>
						Execute a GraphQL query to view the results here
					</Stack>
				</Center>
			)}
		</ContentPane>
	);
}
