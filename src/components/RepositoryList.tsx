import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

import repositoriesMockup from "../data/repositoriesMockup"
import RepositoryItem from "./RepositoryItem"

const RepositoryList = () => {
    return (
        <FlatList
            data={repositoriesMockup}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={({item: repository}) => (
                <RepositoryItem repo={repository} />
            )}
        />
    )
}

export default RepositoryList
