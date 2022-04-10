import React, { useState } from 'react';
import { Image, Pressable, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';
import styles from './styles';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import movie from '../../assets/data/movie';
import EpisodeItem from '../../components/EpisodeItem';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const DetailsScreen = () => {

    const [currentSeason, setCurrentSeason] = useState(firstSeason);

    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View>
            <Image style={styles.image} source={{ uri: firstEpisode.poster }} />

            <FlatList 
                data={currentSeason.episodes.items}
                renderItem={({ item }) => <EpisodeItem episode={item}/>}
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

                        <Picker
                            selectedValue={currentSeason.name}
                            onValueChange={(itemValue, itemIndex) => {
                                setCurrentSeason(movie.seasons.items[itemIndex])
                            }}
                            style={{ color: 'white', width: 135, bottom: -12, }}
                            dropdownIconColor={'white'}
                            >
                                {seasonNames.map(seasonName => (
                                    <Picker.Item label={seasonName} value={seasonName} />    
                                ))}
                        </Picker>
                    </View>
                )}
            />
        </View>
    )
};

export default DetailsScreen;