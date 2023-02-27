import { SubredditPost } from "./subreddit-post"

export interface SubredditPostList {
    after: string
    before: string
    dist: number
    subreddit_url: string
    posts: SubredditPost[]
}
