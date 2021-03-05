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

  useEffect(() => {
    // фильтрует список ишью по входящим лейблам из мультикомбобокса
    const filterIssues = (issue) => {
      const checker = (arr, target) =>
        target.every((item) => arr.includes(item))
      let filterLabelsList = filterLabels.map((value) => value.label)
      let issueLabels = issue.labels.map((item) => item.name)
      // выбирает ишью без лейблов
      if (filterLabelsList.includes('_no label') && issue.labels.length === 0) {
        return true
      }
      // выбирает ишью без лейблов
      return checker(issueLabels, filterLabelsList) ? true : false
    }
    if (issuesList !== null && filterLabels !== null) {
      let filterResult = issuesList.filter(filterIssues)

      // удаляет дубликаты после фильтрации
      let filterResultUniqueNumbers = new Set([
        ...filterResult.map((el) => el.number),
      ])
      let filterResultUnique = []
      filterResultUniqueNumbers.forEach((el) => {
        filterResultUnique.push(filterResult.find((item) => item.number === el))
      })
      // удаляет дубликаты после фильтрации

      setFilteredIssues(filterResultUnique)
    }
    if (filterLabels === null) {
      setFilteredIssues(null)
    }
  }, [filterLabels, issuesList])

  return (
    <div className="ColumnContent">
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
              Выбери фильтр
            </Text>
          </div>
        )}

        {filteredIssues instanceof Array && filteredIssues.length === 0 && (
          <div className="ColumnContent_centerWrapper">
            <div>
              <Text
                size="m"
                lineHeight="m"
                view="ghost"
                style={{ marginBottom: 'var(--space-xs)' }}
              >
                ¯\_(ツ)_/¯
              </Text>
              <Text size="xs" lineHeight="xs" view="ghost">
                По
                {filterLabels != null && filterLabels.length > 1
                  ? ' выбранным фильтрам'
                  : ' выбранному фильтру'}
                <br /> результатов нет
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ColumnContent
