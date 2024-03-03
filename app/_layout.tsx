import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			{/* Home page screen */}
			<Stack.Screen
				name="index"
				options={{
					title: "Home",
				}}
			/>
			{/* report-sighting/index screen */}
			<Stack.Screen
				name="report-sighting/index"
				options={{
					title: "Report Sighting",
				}}
			/>
		</Stack>
	);
}
