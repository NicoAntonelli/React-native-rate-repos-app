import React from 'react'
import { StyleSheet, View } from 'react-native'

import Numbers from '../../tools/Numbers'
import Repository from '../../entities/Repository'

import StyledText from '../StyledText'

interface IProps { repo: Repository }

const RepositoryItemStats = (props: IProps) => {
    const { repo } = props

    return (
        <View style={Styles.container}>
            <View>
                <StyledText align='center'>
                    {Numbers.parseThousands(repo.forksCount)}
                </StyledText>
                <StyledText align='center' fontWeight='bold' fontSize='small'>
                    Forks Count
                </StyledText>
            </View>            
            <View>            
                <StyledText align='center'>
                    {Numbers.parseThousands(repo.stargazersCount)}
                </StyledText>
                <StyledText align='center' fontWeight='bold' fontSize='small'>
                    Stars
                </StyledText>
            </View>            
            <View> 
                <StyledText align='center'>
                    {repo.ratingAverage} %
                </StyledText>
                <StyledText align='center' fontWeight='bold' fontSize='small'>
                    Rating
                </StyledText>
            </View>            
            <View> 
                <StyledText align='center'>
                    {repo.reviewCount}
                </StyledText>
                <StyledText align='center' fontWeight='bold' fontSize='small'>
                    Review
                </StyledText>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    }
})

export default RepositoryItemStats
