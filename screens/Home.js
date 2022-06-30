import React, { useState } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from '../constants';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {

  //Search feature 
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if(!value.length) return setNftData(NFTData);

    //If user searches in searchbox, compare search value to NFTData
    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    //If there is at least one match, return that value, ELSE, return NFTData
    if(filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            // data={data} creates dynamic data from state (passed from the Search), or NFTData
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, height: 300, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
    );
}

export default Home ;