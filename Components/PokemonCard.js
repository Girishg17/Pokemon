import { View, StyleSheet, Text, Platform, Image } from "react-native";
import React from "react";
const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.namecontainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      ></Image>
      <View style={styles.typecontainer}>
        <View style={[styles.badge, borderColor]}>
          <Text style={styles.styleemoji}>{emoji}</Text>
          <Text style={styles.styletype}>{type}</Text>
        </View>
      </View>
      <View style={styles.movecontainer}>
        <Text style={styles.movetext}>Moves:{moves.join(", ")}</Text>
      </View>
      <View style={styles.weakcontainer}>
        <Text style={styles.weaktext}>Weakness:{weakness.join(", ")}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.7,
        shadowRadius: 4,
      },
      android: {
        elavation: 5,
      },
    }),
  },
  namecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typecontainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  styleemoji: {
    fontSize: 30,
    marginRight: 12,
  },
  styletype: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movecontainer: {
    marginBottom: 16,
  },
  movetext: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weakcontainer: {
    marginBottom: 8,
  },
  weaktext: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
