export interface Workflow {
    workflowName: string
    scripts: [filepath: string]
    audios: [audiopath: string]
    videos: [videopath: string]
}
