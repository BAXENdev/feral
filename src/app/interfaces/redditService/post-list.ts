import { Post } from './post'

export interface PostList {
    after: string
    before: string
    dist: number
    subreddit_url: string
    posts: Post[]
}
