import React, { useState, useEffect } from 'react'
import './ColumnContent.scss'
import { useStoreState } from 'easy-peasy'
import { Text } from '@consta/uikit/Text'
import { Badge } from '@consta/uikit/Badge'
import TEXTColor from '../../utils/textcolor'
import { format } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'
import { MultiCombobox } from '@consta/uikit/MultiCombobox'

function ColumnContent() {
  const [optionsList, setOptionsList] = useState([])
  const issuesList = useStoreState((state) => state.issuesList)
  const repoLabelsList = useStoreState(
    (state) => state.repoLabelsList
  )
  const getItemLabel = (option) => {
    return option.label
  }
  const [value, setValue] = useState(null)
  const [filteredIssues, setFilteredIssues] = useState([])

  useEffect(() => {
    repoLabelsList &&
      setOptionsList([
        ...repoLabelsList.map((item) => {
          return { label: item.name, value: item.id + '' }
        }),
      ])
  }, [repoLabelsList])

  let checker = (arr, target) =>
    target.every((item)  => arr.includes(item))

  useEffect(() => {
    if (issuesList != null && value != null) {
      setFilteredIssues([
        ...issuesList?.filter(function (item) {
          let filterLabels = value.map((value) => value.label)
          let issueLabels = item.labels.map((item) => item.name)
          return checker(issueLabels, filterLabels) ? true : false
          // for (let i = 0; i < issueLabels.length; i++) {
          //   if (filterLabels.includes(issueLabels[i])) {
          //     return true
          //   }
          //   return false
          // }
        }),
      ])
    }
  }, [issuesList, value])

  return (
    <div className="ColumnContent">
      {issuesList && (
        <div className="ColumnContent_controls">
          <MultiCombobox
            id="city"
            options={optionsList}
            getOptionLabel={getItemLabel}
            size="s"
            onChange={setValue}
            value={value}
          />
          <Badge status="system" label={filteredIssues.length.toString()} />
        </div>
      )}

      {filteredIssues &&
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
    </div>
  )
}

export default ColumnContent
