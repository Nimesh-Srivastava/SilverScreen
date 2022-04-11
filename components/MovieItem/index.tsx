import { Image, Pressable } from "react-native";
import styles from './styles';
import { Movie } from "../../src/models";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { Storage } from "aws-amplify";

const MovieItem = ({ movie }: { movie: Movie }) => {
    
    const navigation = useNavigation();
    
    const [imageUrl, setImageUrl] = useState('');

    const onMoviePress = (movie: Movie) => {
        navigation.navigate('DetailsScreen', { id: movie.id })
    }

    useEffect(() => {
        if(movie.poster.startsWith('http')) {
            setImageUrl(movie.poster);

            return;
        }

        Storage.get(movie.poster).then(setImageUrl)
    }, []);

    return(
        <Pressable onPress={onMoviePress}>
            <Image style={styles.image} source={{ uri: imageUrl  }} />
        </Pressable>
    )
}

export default MovieItem;