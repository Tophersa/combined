import React from 'react'
import { View, Text, FlatList } from 'react-native'
import feed from '../../../assets/data/feed'
import Post from '../../components/Post/Post'

const SearchResults = () => {

    const renderItem = ({ item }) => (
        <Post post={item} />
      );

    return (
        <View>
            <FlatList data={feed} renderItem={renderItem}
            keyExtractor={item => item.id}
            />
            
        </View>
    )
}

export default SearchResults
