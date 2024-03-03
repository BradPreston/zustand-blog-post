import { View, Text, StyleSheet, Pressable } from "react-native";
import useBearStore from "../../state";

export default function ReportSighting() {
	// grab the increasePopulation function from the useBearStore hook
	const increasePopulation = useBearStore(({ increasePopulation }) => increasePopulation);

	// return the view for the Report Sighting page
	return (
		<View style={styles.wrapper}>
			<View style={styles.buttonWrapper}>
				<Pressable onPress={increasePopulation}>
					<Text style={styles.button}>I've seen a bear!</Text>
				</Pressable>
			</View>
		</View>
	);
}

// stylesheet for the Report Sighting page
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonWrapper: {
		width: "auto",
		backgroundColor: "#333",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
	button: {
		color: "#fff",
	},
});
