import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';

import styles from './styles';

import categories from '../../assets/data/categories';
import { Episode } from '../../types';
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { useEffect, useRef, useState } from 'react';
import { unloadAsync } from 'expo-font';

interface VideoPlayerProps {
    episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;

    const [status, setStatus] = useState({});
    const video = useRef<Playback>(null);

    useEffect(() => {
        (async () => {
            await video?.current?.unloadAsync()
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    }, [episode])

    return (
        <Video 
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video
            }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            posterSource={{
                uri: episode.poster
            }}
            usePoster
            useNativeControls
            resizeMode='contain'
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    );
}

export default VideoPlayer;
