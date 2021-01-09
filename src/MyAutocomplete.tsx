import {withStyles} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import {AutocompleteProps} from '@material-ui/lab/Autocomplete/Autocomplete';

export function MyAutoComplete<T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined>() {
  return withStyles({
    option: {
      '&[aria-selected="true"]': {
        backgroundColor: 'rgb(38, 132, 255)',
      }
    }
  })(Autocomplete) as React.ComponentType<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>>
}

