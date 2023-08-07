interface Repository {
    id: number
    gitId: string
    name: string
    description: string
    language: string
    forksCount: number
    stargazersCount: number
    ratingAverage: number
    reviewCount: number
    ownerAvatarUrl: string
}

export default Repository
