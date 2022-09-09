import React from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"

export default function Home() {
	return (
		<View style={{ backgroundColor: "white" }}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between"
				}}
			>
				<Text>Menu</Text>
				<Text>Logo</Text>
				<View style={{ flexDirection: "row" }}>
					<Text>Search</Text>
					<Text>Notification</Text>
				</View>
			</View>
			<Catalog />
		</View>
	)
}

const CatalogData = [
	{
		name: 'Pinarello Bike',
		price: '$1,700.00',
		fav: true,
	},
	{
		name: 'Brompton Bike',
		price: '$1,500.00',
		fav: false,
	},
	{
		name: 'Schwinn Bike',
		price: '$1,200.00',
		fav: false,
	},
	{
		name: 'Norco Bike',
		price: '$9,800.00',
		fav: false,
	}
]

const Catalog = () => {
	return (
		<View style={catalogStyles.container}>
			<FlatList
				numColumns={2}
				data={CatalogData}
				renderItem={({ item }) => (
					<View style={catalogStyles.item}>
						<Text>Image</Text>
						<Text>{item.name}</Text>
						<Text>{item.price}</Text>
					</View>
				)}
			/>
		</View>
	)
}


const catalogStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		width: "50%",
		padding: 10,
		margin: 10,
		borderRadius: 10,
		backgroundColor: "#e3e3e3"
	}
})
