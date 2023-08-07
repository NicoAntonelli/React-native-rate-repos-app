import React from "react"
import { FlatList, StyleSheet, View } from "react-native"

import repositoriesMockup from "../../data/repositoriesMockup"
import RepositoryItem from "./RepositoryItem"

const RepositoryList = () => {
    return (
        <FlatList
            style={styles.container}
            data={repositoriesMockup}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={({item: repository}) => (
                <RepositoryItem repo={repository} />
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: { marginBottom: 30 }
})

export default RepositoryList
