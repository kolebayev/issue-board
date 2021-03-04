import { createStore, action } from 'easy-peasy'
import stateIssuesList from './issues'
import labels from './labels'

const model = {
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
  // githubToken: '1cd97e52c01a37b55de70a16809a3d56273d1a40',
  setGithubToken: action((state, payload) => {
    state.githubToken = payload
  }),

  // issuesList: null,
  issuesList: stateIssuesList,
  setIssuesList: action((state, payload) => {
    state.issuesList = [...payload]
  }),

  // repoLabelsList: null,
  repoLabelsList: [
    { label: '_no label', value: 'no label' },
    ...labels.map((item) => {
      return { label: item.name, value: item.id + '' }
    }),
  ],
  setRepoLabelsList: action((state, payload) => {
    state.repoLabelsList = [
      { label: '_no label', value: 'no label' },
      ...payload.map((item) => {
        return { label: item.name, value: item.id + '' }
      }),
    ]
  }),
}

const store = createStore(model)
export default store
