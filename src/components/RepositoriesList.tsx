import React from "react"
import { View, Text } from "react-native"

import repositoriesMockup from "../data/repositoriesMockup"
import Repository from "../entities/Repository"

const RepositoryList = () => {
    return (
        <View>
            {repositoriesMockup.map((repository: Repository) => (
                <View key={repository.id}>
                    <Text>{repository.gitId}</Text>
                    <Text>{repository.name}</Text>
                    <Text>{repository.description}</Text>
                    <Text>{repository.language}</Text>
                    <Text>{repository.forksCount}</Text>
                    <Text>{repository.stargazersCount}</Text>
                    <Text>{repository.ratingAverage}</Text>
                    <Text>{repository.reviewCount}</Text>
                    <Text>{repository.ownerAvatarUrl}</Text>
                </View>
            ))}
        </View>
    )
}

export default RepositoryList
