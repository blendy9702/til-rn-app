import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AboutScreen = (): JSX.Element => {
  const data = [
    {id: 1, title: '사과'},
    {id: 2, title: '딸기'},
    {id: 3, title: '배'},
    {id: 4, title: '참외'},
  ];
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => setRefreshing(false), 2000);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    flex: 1,
  },
});
export default AboutScreen;
