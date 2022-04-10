import { Image, FlatList, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import { Episode } from '../../types';

interface EpisodeItemProps {
    episode: Episode;
    onPress: (episode: Episode) => {};
}

const EpisodeItem = (props: EpisodeItemProps) => {
    const { episode, onPress } = props;

    return (
        <Pressable style={{ margin: 12 }} onPress={() => onPress(episode)} >
            <View style={styles.row}>
                <Image style={styles.image} source={{ uri: episode.poster }} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{ episode.title }</Text>
                    <Text style={styles.duration}>{ episode.duration }</Text>
                </View>
                
                <AntDesign name="download" size={16} color="white" />
            </View>

            <Text style={styles.plot}>{ episode.plot }</Text>
        </Pressable>
    )
};

export default EpisodeItem;