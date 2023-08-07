import React from 'react'
import { StyleSheet, View } from 'react-native'
import Repository from '../entities/Repository'
import StyledText from './StyledText'

interface IProps { repo: Repository }

const RepositoryItem = (props: IProps) => {
    const { repo } = props

    return (
        <View key={repo.id} style={styles.item}>
            <StyledText fontSize='title' color='primary'>{repo.name}</StyledText>
            <StyledText fontSize='subHeader'>{repo.description}</StyledText>
            <StyledText fontSize='small'>Language: {repo.language}</StyledText>
            <StyledText fontSize='small'>Forks Count: {repo.forksCount}</StyledText>
            <StyledText fontSize='small'>Stars: {repo.stargazersCount}</StyledText>
            <StyledText fontSize='small'>Rating: {repo.ratingAverage}</StyledText>
            <StyledText fontSize='small'>Review: {repo.reviewCount}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    item: { paddingVertical: 20, paddingHorizontal: 10 },
    id: { fontWeight: "bold", fontSize: 16 },
})

export default RepositoryItem
