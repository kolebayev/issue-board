import React from 'react'
import './InputWithLabel.scss'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

function InputWithLabel({
  defaultValue,
  labelLeft,
  placeholder,
  width,
  onInputChange,
}) {
  const handleChange = ({ value }) => onInputChange(value)
  return (
    <div className="InputWithLabel">
      <div className="InputWithLabel_label">
        <Text view="secondary" size="xs">
          {labelLeft}
        </Text>
      </div>
      <TextField
        onChange={handleChange}
        value={defaultValue}
        size="m"
        placeholder={placeholder}
        width={width}
      />
    </div>
  )
}

export default InputWithLabel
