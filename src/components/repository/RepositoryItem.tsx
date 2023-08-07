import React from 'react'
import { StyleSheet, View } from 'react-native'

import Repository from '../../entities/Repository'

import RepositoryItemStats from './RepositoryItemStats'
import RepositoryItemHeader from './RepositoryItemHeader'

interface IProps { repo: Repository }

const RepositoryItem = (props: IProps) => {
    const { repo } = props

    return (
        <View key={repo.id} style={styles.container}>
            <RepositoryItemHeader repo={repo} />
            <RepositoryItemStats repo={repo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingVertical: 20, paddingHorizontal: 10 },
})

export default RepositoryItem
