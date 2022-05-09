import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function Calendar() {

  const [value, setValue] = React.useState(new Date());
 
  const handleChange = (newValue) => {
    setValue(newValue);}

  return (
    <div className="calendar" style={{margin: "5% 40%"}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Select Workout Date & Time"
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

export default Calendar;
