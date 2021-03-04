import React, { useState, useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import { MultiCombobox } from '@consta/uikit/MultiCombobox'

function CustomMultiCombobox(props) {
  const { getFilterLabels } = props
  const [value, setValue] = useState(null)
  const getItemLabel = (option) => option.label
  const repoLabelsList = useStoreState((state) => state.repoLabelsList)

  useEffect(() => {
    if (value === null) {
      getFilterLabels(null)
    }
    if (value instanceof Array) {
      value.length === 0 ? getFilterLabels(null) : getFilterLabels(value)
    }
  }, [getFilterLabels, value])

  return (
    <MultiCombobox
      id="filter"
      options={repoLabelsList}
      getOptionLabel={getItemLabel}
      size="s"
      onChange={setValue}
      value={value}
    />
  )
}

export default CustomMultiCombobox
