import { HttpPostParams } from '../protocols/http'
import faker from '@faker-js/faker'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement({ body: 'any_body' })
})
