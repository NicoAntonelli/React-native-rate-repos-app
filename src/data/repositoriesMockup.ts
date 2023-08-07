import Repository from "../entities/Repository"

const repositoriesMockup: Repository[] = [
    {
        id: 1,
        name: "nextjs/next.js",
        description: "The React Framework for Production",
        language: "JavaScript",
        forksCount: 40000,
        stargazersCount: 60000,
        ratingAverage: 90,
        reviewCount: 10,
        ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/12551863?v=4"
    },
    {
        id: 2,
        name: "django/django",
        description: "The web framework for perfectionists with deadlines.",
        language: "Python",
        forksCount: 35000,
        stargazersCount: 50000,
        ratingAverage: 75,
        reviewCount: 5,
        ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4"
    },
    {
        id: 3,
        name: "typescript/typescript",
        description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
        language: "TypeScript",
        forksCount: 70000,
        stargazersCount: 100000,
        ratingAverage: 85,
        reviewCount: 15,
        ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13742415?v=4"
    },
]

export default repositoriesMockup
