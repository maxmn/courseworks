import React from "react"
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from "react-native"
// import { useNavigationContainerRef } from '@react-navigation/native'

export default function Login({ navigation }) {
	// const navigationRef = useNavigationContainerRef()

	return (
		<View style={{ flex: 1, display: "grid", placeItems: "center", backgroundColor: "#ffffff" }}>
			<View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<Image
					source={require("../assets/adaptive-icon.png")}
					style={{
						width: 185,
						height: 185,
						marginBottom: 60,
						transform: [{rotate: "45deg"}],
						borderRadius: 20,
						backgroundColor: "orange",
					}}
				/>
				<Text
					style={{
						fontSize: 24,
						textAlign: "center",
						marginBottom: 20,
					}}
				>
					<Text style={{ display: "block" }}>
						Welcome to
					</Text>
					<Text style={{ display: "block", fontWeight: "700" }}>
						Power Bike Shop
					</Text>
				</Text>
				<TouchableOpacity
					onPress={() => {navigation.navigate("Home")}}
					style={{
						backgroundColor: "#e3e3e3",
						padding: 10,
						paddingHorizontal: 60,
						marginBottom: 12,
						borderRadius: 10,
					}}
				>
					<Text style={{ fontSize: 17, fontWeight: 400 }}>
						Login with Gmail
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {navigation.navigate("Home")}}
					style={{
						backgroundColor: "#000000",
						padding: 10,
						paddingHorizontal: 60,
						marginBottom: 15,
						borderRadius: 12,
					}}
				>
					<Text style={{ fontSize: 17, fontWeight: 400, color: "#ffffff" }}>
						Login with Apple
					</Text>
				</TouchableOpacity>
				<Text style={{ fontSize: 15 }}>
					<Text style={{ color: "#888888" }}>Not a member?&nbsp;</Text>
					<Text style={{ color: "orange", fontWeight: 700 }}>Sign up</Text>
				</Text>
			</View>
		</View>
	)
}
