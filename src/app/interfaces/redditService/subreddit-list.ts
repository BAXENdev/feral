import { Subreddit } from "./subreddit"

export interface SubredditList {
    after: string
    before: string
    dist: number
    subreddits: Subreddit[]
}
