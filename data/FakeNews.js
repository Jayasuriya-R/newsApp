import { faker } from '@faker-js/faker'

const generateFakeNews = (limit) => {
    const newList = []
    for (let i = 0; i < limit; i++) {
        const title = faker.lorem.sentence({ min: 3, max: 5 })
        const content = faker.lorem.paragraph()
        const date = faker.date.past()
        const id = faker.string.uuid()
        const image = faker.image.urlPicsumPhotos()
        const author = faker.person.fullName()

        newList.push({ title, content, date, id, image, author })


    }
    return newList
}

export default generateFakeNews;