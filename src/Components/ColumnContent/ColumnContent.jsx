import React, { useState, useEffect } from 'react'
import './ColumnContent.scss'
import { useStoreState } from 'easy-peasy'
import { Text } from '@consta/uikit/Text'
import { Badge } from '@consta/uikit/Badge'
import TEXTColor from '../../utils/textcolor'
import { format } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'
import CustomMultiCombobox from '../CustomMultiCombobox/CustomMultiCombobox'

function ColumnContent() {
  const [filteredIssues, setFilteredIssues] = useState(null)
  const [filterLabels, setFilterLabels] = useState(null)
  const issuesList = useStoreState((state) => state.issuesList)
  const repoLabelsList = useStoreState((state) => state.repoLabelsList)
  const getFilterLabels = (labels) => setFilterLabels(labels)

  // useEffect(() => {
  //   repoLabelsList &&
  //     setOptionsList([
  //       ...repoLabelsList.map((item) => {
  //         return { label: item.name, value: item.id + '' }
  //       }),
  //     ])
  // }, [repoLabelsList])

  useEffect(() => {
    const filterIssues = (issue) => {
      const checker = (arr, target) =>
        target.every((item) => arr.includes(item))
      let filterLabelsList = filterLabels.map((value) => value.label)
      let issueLabels = issue.labels.map((item) => item.name)
      // if (filterLabelsList.includes('_no label')) {
      //   return issue.labels.length === 0 ? true : false
      // }
      return checker(issueLabels, filterLabelsList) ? true : false
    }
    if (issuesList !== null && filterLabels !== null) {
      let filterResult = issuesList.filter(filterIssues)

      // console.log(filterResult)

      let filteredIssueNamesListClearedFromDuplicates = [
        ...new Set(filterResult.map((item) => item.title)),
      ]
      console.log(filteredIssueNamesListClearedFromDuplicates)

      let filterResultClearFromDuplicates = []
      filteredIssueNamesListClearedFromDuplicates.forEach((item) => {
        filterResultClearFromDuplicates.push(
          ...filterResult.filter((issue) => issue.title === item)
        )
      })
      console.log(filterResultClearFromDuplicates)

      setFilteredIssues(filterResult)
    }
    if (filterLabels === null) {
      setFilteredIssues(null)
    }
  }, [filterLabels, issuesList])

  return (
    <div className="ColumnContent">
      {/* {issuesList && ( */}
      <div className="ColumnContent_controls">
        <CustomMultiCombobox
          items={repoLabelsList}
          getFilterLabels={getFilterLabels}
        />
        <Badge
          status="system"
          label={filteredIssues ? filteredIssues.length : '-'}
        />
      </div>
      {/* )} */}

      <div className="ColumnContent_content">
        {filteredIssues != null &&
          filteredIssues.map((item, index) => {
            return (
              <div className="ColumnContent_card" key={index}>
                <Text
                  size="s"
                  view="primary"
                  weight="semibold"
                  className="ColumnContent_card_heading"
                  as="a"
                  href={item.html_url}
                  target="_blank"
                >
                  {item.title}
                </Text>
                <Text
                  size="xs"
                  view="secondary"
                  className="ColumnContent_card_subHeading"
                >
                  #{item.number} создано{' '}
                  {format(new Date(item.created_at), 'dd MMM yyyy', {
                    locale: ruLocale,
                  })}
                  {'  '}
                  <Text
                    size="xs"
                    view="secondary"
                    weight="semibold"
                    as="a"
                    target="_blank"
                    href={item.user.html_url}
                  >
                    {item.user.login}
                  </Text>
                </Text>
                <div className="ColumnContent_card_badgeGroup">
                  {item.labels.map((item, idx) => (
                    <Badge
                      key={idx}
                      size="s"
                      form="round"
                      label={item.name}
                      className="ColumnContent_card_badgeGroup_badge"
                      style={{
                        backgroundColor: '#' + item.color,
                        color: TEXTColor.findTextColor('#' + item.color) + '',
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}

        {filteredIssues === null && (
          <div className="ColumnContent_centerWrapper">
            <Text size="xs" view="ghost">
              {filterLabels === null && 'Выбери фильтр'}
              {filteredIssues != null && filteredIssues.length === 0 && (
                <>
                  <Text
                    size="m"
                    lineHeight="s"
                    view="ghost"
                    style={{ marginBottom: 'var(--space-xs)' }}
                  >
                    ¯\_(ツ)_/¯
                  </Text>
                  По{' '}
                  {filterLabels != null && filterLabels.length > 1
                    ? 'выбранным фильтрам'
                    : 'выбранному фильтру'}
                  <br /> результатов нет
                </>
              )}
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColumnContent
