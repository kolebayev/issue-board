import { createStore, action, Action } from 'easy-peasy'

export interface ModelTypes {
  sidebarSettingsIsOpen: boolean
  setSidebarSettingsIsOpen: Action<ModelTypes, boolean>
  repoOwner: string | null
  setRepoOwner: Action<ModelTypes, string>
  repoName: string | null
  setRepoName: Action<ModelTypes, string>
  githubToken: string | null
  setGithubToken: Action<ModelTypes, string>
  issuesList: Object[] | null,
  setIssuesList:  Action<ModelTypes, Object[]>
}

const model: ModelTypes = {
  sidebarSettingsIsOpen: false,
  setSidebarSettingsIsOpen: action((state, payload) => {
    state.sidebarSettingsIsOpen = payload
  }),

  repoOwner: 'gazprom-neft',
  setRepoOwner: action((state, payload) => {
    state.repoOwner = payload
  }),

  repoName: 'consta-uikit',
  setRepoName: action((state, payload) => {
    state.repoName = payload
  }),

  githubToken: null,
  setGithubToken: action((state, payload) => {
    state.githubToken = payload
  }),

  issuesList: null,
  setIssuesList: action((state, payload) => {
    state.issuesList = [...payload]
  })
}

const store = createStore(model)
export default store
