import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Repository from '../../entities/Repository'
import StyledText from '../StyledText'
import Theme from '../../Theme'

interface IProps { repo: Repository }

const RepositoryItemHeader = (props: IProps) => {
    const { repo } = props

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
            </View>
            <View style={styles.infoContainer}>
                <StyledText fontSize='title' fontWeight='bold'>{repo.name}</StyledText>
                <StyledText fontSize='subHeader' color='textSecondary'>{repo.description}</StyledText>
                <StyledText style={styles.language}>Language: {repo.language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: { width: 50, height: 50, borderRadius: 5 },
    infoContainer: { paddingLeft: 10, flex: 1 },
    language: {
        marginTop: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: Theme.colors.white,
        backgroundColor: Theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 10
    }
})

export default RepositoryItemHeader
