
export class API_CONSTANTS {
    public static apiUrl = "http://localhost:24024"
    public static apiInitUrl = this.apiUrl + '/init'
}

export class REDDIT_API_CONSTANTS {
    public static apiUrl = "http://localhost:24024"
    public static apiRedditUrl = this.apiUrl + '/reddit'
    public static apiRedditSubredditsUrl = this.apiRedditUrl + '/subreddits'
    public static apiRedditSearchSubredditsUrl = this.apiRedditUrl + '/search_subreddits'
    public static apiRedditPostsFromSubredditUrl = this.apiRedditUrl + '/subreddit_posts'
}

export class WORKFLOW_CONSTANTS {
    public static apiUrl = "http://localhost:24024"
    public static apiWorkflowLogUrl = this.apiUrl + "/workflow_log"
    public static apiWorkflowUrl = this.apiUrl + "/workflows"
    public static apiVideoEditorUrl = this.apiUrl + "/video_editor"
    public static apiVideoUploaderUrl = this.apiUrl + "/video_uploader"
}
