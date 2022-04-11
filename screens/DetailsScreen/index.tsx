import React, { useEffect, useState } from 'react';
import { Image, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';
import VideoPlayer from '../../components/VideoPlayer';
import { Episode, Movie, Season } from '../../src/models';
import { DataStore } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const DetailsScreen = () => {

    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const [seasons, setSeasons] = useState<Season[]>([]);
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [currentSeason, setCurrentSeason] = useState<Season | undefined>(undefined);
    const [currentEpisode, setCurrentEpisode] = useState<Episode | undefined>(undefined);
    const seasonNames = seasons ? seasons.map(season => season.name) : [];

    const route = useRoute();

    useEffect(() => {
        const fetchMovie = async () => {
            setMovie(await DataStore.query(Movie, route?.params?.id));
        };

        fetchMovie();
    }, []);

    useEffect(() => {
        if(!movie){
            return ;
        }

        const fetchSeasons = async () => {
            const movieSeasons = (await DataStore.query(Season)).filter(s => s.movie?.id === movie.id);
            setSeasons(movieSeasons);
            setCurrentSeason(movieSeasons[0]);
        };

        fetchSeasons();
    }, [movie]);

    useEffect(() => {
        if(!currentSeason){
            return;
        }

        const fetchEpisodes = async () => {
            const seasonEpisodes = (
                await DataStore.query(Episode)
            ).filter(e => e.season?.id === currentSeason?.id);

            setEpisodes(seasonEpisodes);
            setCurrentEpisode(seasonEpisodes[0]);
        };

        fetchEpisodes();
    }, [currentSeason]);

    if(!movie) {
        return <ActivityIndicator />
    }

    return (
        <View>

            {currentEpisode && <VideoPlayer episode={currentEpisode} />}

            <FlatList 
                data={episodes}
                renderItem={({ item }) => <EpisodeItem episode={item} onPress={setCurrentEpisode}/>}
                style={{ marginBottom: 200, marginTop: 2, }}
                ListHeaderComponent={(
                    <View style={{ padding: 10 }}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.match}>99% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12 +</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
                            <MaterialIcons name="hd" size={26} color="white" style={{ paddingHorizontal: 5, }} />
                        </View>

                        <Pressable onPress={() => { console.warn('Play') }} style={styles.playButton}>
                            <Entypo name="controller-play" size={24} color="black" />
                            <Text style={styles.playButtonText}>
                                Play
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => { console.warn('Download') }} style={styles.downloadButton}>
                            <AntDesign name="download" size={16} color="white" />
                            <Text style={styles.downloadButtonText}>
                                Download
                            </Text>
                        </Pressable>

                        <Text style={{ marginVertical: 10, }}>{movie.plot}</Text>
                        <Text style={styles.details}>Cast: {movie.cast}</Text>
                        <Text style={styles.details}>Creator: {movie.creator}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={styles.icons}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={styles.iconText}>My List</Text>
                            </View>
                            <View style={styles.icons}>
                                <AntDesign name="like2" size={24} color="white" />
                                <Text style={styles.iconText}>Rate</Text>
                            </View>
                            <View style={styles.icons}>
                                <Entypo name="share" size={24} color="white" />
                                <Text style={styles.iconText}>Share</Text>
                            </View>
                        </View>

                        {currentSeason && (
                            <Picker
                                selectedValue={currentSeason.name}
                                onValueChange={(itemValue, itemIndex) => {
                                    setCurrentSeason(seasons[itemIndex])
                                }}
                                style={{ color: 'white', width: 145, bottom: -12, }}
                                dropdownIconColor={'white'}
                                >
                                    {seasonNames.map(seasonName => (
                                        <Picker.Item label={seasonName} value={seasonName} key={seasonName} />    
                                    ))}
                            </Picker>
                        )}
                    </View>
                )}
            />
        </View>
    )
};

export default DetailsScreen;