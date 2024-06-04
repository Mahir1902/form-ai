import React, { ReactElement } from 'react'
import { IconType } from 'react-icons/lib'
import { TextField } from './fields/TextField'


export type FieldType = 'TextField'

export type FormFieldInstance = {
  id:string,
  type: FieldType,
  extraAttributes?: Record<string, any>
}

export type FormField = {
  type: FieldType

  construct: (id:string) => FormFieldInstance


  designerButton: {
    icon: IconType
    label: string
  }

  designerComponent: React.FC
  formComponent: React.FC
  propertiesComponent: React.FC
}


type FormFieldsType = {
  [key in FieldType]: FormField
}

export const FormFields: FormFieldsType = {
  TextField: TextField
}