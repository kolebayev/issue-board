import React from 'react';
import './InputWithLabel.scss';
import { Text } from '@consta/uikit/Text'
import { TextField } from "@consta/uikit/TextField"

type InputWithLabelProps = {
  labelLeft: string,
  labelRight: string | null,
  placeholder: string,
  width: 'full' | 'default',
  defaultValue: string | null,
  onInputChange: Function
}

function InputWithLabel({ defaultValue, labelLeft, labelRight, placeholder, width, onInputChange }: InputWithLabelProps) {
  const handleChange = ({ value }: { value: string | null }) => onInputChange(value);
  return (
    <div className='InputWithLabel'>
      <div className='InputWithLabel_label'>
        <Text view='secondary' size='xs' >{labelLeft}</Text>
        {labelRight &&
          <Text
            view='link'
            size='xs'
            as='a'
            href='https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token'
          >
            {labelRight}
          </Text>
        }
      </div>
      <TextField onChange={handleChange} value={defaultValue} size='m' placeholder={placeholder} width={width} />
    </div>
  )
}

export default InputWithLabel