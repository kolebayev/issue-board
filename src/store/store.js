import { createStore, action } from 'easy-peasy'
// import stateIssuesList from './issues'
// import labels from './labels'

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

  issuesList: null,
  // issuesList: stateIssuesList
  //   .filter((item) => item.pull_request === undefined)
  //   .filter((item) => item.closed_at === null),
  setIssuesList: action((state, payload) => {
    state.issuesList = [
      // https://docs.github.com/en/rest/reference/issues#list-repository-issues
      // note bout v3
      ...payload
        .filter((item) => item.pull_request === undefined)
        .filter((item) => item.closed_at === null),
    ]
  }),

  repoLabelsList: [],
  // repoLabelsList: [
  //   { label: '_no label', value: 'no label' },
  //   ...labels.map((item) => {
  //     return { label: item.name, value: item.id + '' }
  //   }),
  // ],
  setRepoLabelsList: action((state, payload) => {
    state.repoLabelsList = [
      { label: '_no label', value: 'no label' },
      ...payload.map((item) => {
        return { label: item.name, value: item.id + '' }
      }),
    ]
  }),

  colsQty: 3,
  setColsQty: action((state, payload) => {
    state.colsQty = payload
  }),
}

const store = createStore(model)
export default store
