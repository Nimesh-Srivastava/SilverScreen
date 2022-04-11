import { Image, FlatList, Pressable } from 'react-native';
import { Text } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import categories from '../../assets/data/categories';
import { Category, Movie } from '../../src/models';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';

interface HomeCategoryProps {
    category: Category
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = (await DataStore.query(Movie)).filter((movie) => movie.categoryID === category.id);
            setMovies(response);
        };

        fetchMovies();
    }, []);

    const onMoviePress = (movie: Movie) => {
        navigation.navigate('DetailsScreen', { id: movie.id })
    }
    
    return (
        <>
            <Text style={styles.title}>{ category.title }</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image style={styles.image} source={{ uri: item.poster  }} />
                    </Pressable>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
  );
}

export default HomeCategory;
