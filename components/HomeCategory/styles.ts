import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    image: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 12,
        marginRight: 7,
        // borderWidth: 1,
        // borderColor: 'white',
    }
});

export default styles;