import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 7,
    },
    image: {
        width: 120,
        aspectRatio: 16/9,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    plot: {
        color: 'darkgrey',
    },
    titleContainer: {
        flex: 1,
        paddingLeft: 8,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    duration: {
        color: 'grey',
        fontSize: 12,
    },
});

export default styles;