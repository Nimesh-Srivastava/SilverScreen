import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16/9,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    match: {
        color: 'orange',
        fontWeight: 'bold',
        marginRight: 7,
        fontSize: 15,
        marginTop: 3,
    },
    year: {
        color: 'grey',
        marginTop: 3,
        marginHorizontal: 7,
        fontSize: 15,
    },
    ageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7,
        paddingBottom: 2,
        borderRadius: 4,
        borderColor: 'grey',
    },
    age: {
        color: 'black',
        backgroundColor: 'grey',
        paddingHorizontal: 5,
        paddingVertical: 2,
        fontSize: 11,
        borderRadius: 4,
        fontWeight: 'bold',
    },
    playButton: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10,
        borderRadius: 3,
    },
    playButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
    downloadButton: {
        flexDirection: 'row',
        backgroundColor: '#2b2b2b',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 8,
        borderRadius: 3,
    },
    downloadButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    details: {
        color: 'grey',
        marginTop: 2,
    },
    icons: {
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 20,
    },
    iconText: {
        color: 'grey'
    },
});

export default styles;