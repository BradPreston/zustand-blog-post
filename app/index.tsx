import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import useBearStore from "../state";

export default function Home() {
	// grab the total number of bears from the useBearStore hook
	const bears = useBearStore(({ bears }) => bears);

	// return the style for the home page
	return (
		<View style={styles.wrapper}>
			<Text style={styles.heading}>Total sightings: {bears}</Text>
			<Link style={styles.link} href="/report-sighting">
				Report a sighting
			</Link>
		</View>
	);
}

// stylesheet for the Home page
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	heading: {
		fontSize: 30,
		marginBottom: 20,
	},
	link: {
		backgroundColor: "#333",
		color: "#fff",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
});
