import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function Calendar() {

  const [value, setValue] = React.useState(new Date('2022-05-05T11:11:54'));
 
  const handleChange = (newValue) => {
    setValue(newValue);}

  return (
<div style={{margin: "5% 40%"}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Date & Time picker"
            value={value}
            onChange={handleChange}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  )
}

export default Calendar
