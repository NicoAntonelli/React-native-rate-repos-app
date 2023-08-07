import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Repository from '../entities/Repository'
import StyledText from './StyledText'
import RepositoryItemStats from './RepositoryItemStats'
import Theme from '../Theme'

interface IProps { repo: Repository }

const RepositoryItem = (props: IProps) => {
    const { repo } = props

    return (
        <View key={repo.id} style={styles.container}>
            <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
            <StyledText fontSize='title' fontWeight='bold'>{repo.name}</StyledText>
            <StyledText fontSize='subHeader'>{repo.description}</StyledText>
            <StyledText style={styles.language}>Language: {repo.language}</StyledText>
            <RepositoryItemStats repo={repo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingVertical: 20, paddingHorizontal: 10 },
    image: { width: 50, height: 50, borderRadius: 5 },
    language: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: Theme.colors.white,
        backgroundColor: Theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 10,
        overflow: 'hidden'
    }
})

export default RepositoryItem
