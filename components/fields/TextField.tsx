'use client'

import React from 'react'
import { FieldType, FormField } from '../FormFields'
import { MdTextFields } from 'react-icons/md'

const type : FieldType = 'TextField'

export const TextField: FormField = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes: {
            lable: 'Text Field',
            placeholder: 'Enter your text here',
            required: false,
            helperText: '',
        }
    }),
    designerButton: {
        icon: MdTextFields,
        label: 'Text Field'
    },
    designerComponent: () => <div>DesignerComponent</div>,
    formComponent: () => <div>FormComponent</div>,
    propertiesComponent: () => <div>PropertiesComponent</div>
}
