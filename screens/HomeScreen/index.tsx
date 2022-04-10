import { Image, FlatList } from 'react-native';
import { Text, View } from '../../components/Themed';

import styles from './styles';

import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[0];

const HomeScreen = () => {
    return (
      <View style={styles.container}>
          <FlatList 
              data={categories.items}
              renderItem={({item}) => <HomeCategory category={item} /> } 
          />
      </View>
  );
}

export default HomeScreen;
