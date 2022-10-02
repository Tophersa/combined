import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { DATA } from '../../../assets/data'
import Alert from '../Home/components/Alert/Alert'

const Alerts = () => {

    const renderItem = ({ item }) => (
        <Alert subject={item.subject} message={item.message} date={item.createdAt} imageUri={item.imageUri} location={item.location} createdBy={item.createdBy} widthSize={"95%"} heightSize={200} alertId={item.id}/>
      );

    return (
        <View style={styles.container}>
            <View style={styles.alertContainer}>
                <FlatList data={DATA} renderItem={renderItem} horizontal={false} snapToEnd={true}/>
            </View>
        </View>
    )
}

export default Alerts
