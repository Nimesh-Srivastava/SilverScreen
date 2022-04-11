import { Image, FlatList, Pressable } from 'react-native';
import { Text } from '../../components/Themed';
import styles from './styles';

import { Category, Movie } from '../../src/models';
import { useEffect, useState } from 'react';
import { DataStore } from 'aws-amplify';
import MovieItem from '../MovieItem';

interface HomeCategoryProps {
    category: Category
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = (await DataStore.query(Movie)).filter((movie) => movie.categoryID === category.id);
            setMovies(response);
        };

        fetchMovies();
    }, []);

    return (
        <>
            <Text style={styles.title}>{ category.title }</Text>
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieItem movie={ item } /> }
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
  );
}

export default HomeCategory;
