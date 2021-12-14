import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useAutocomplete } from '@mui/core/AutocompleteUnstyled';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material'; 
import { useEffect } from 'react';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

const sendRequest = () => {
  alert(12);

  const requestOptions = {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: { first_name: 'Hello from React', second_name: 'i Am here' }
  };


  fetch('http://localhost:3003/booking', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: 'yourValue',
      second_name: 'yourOtherValue',
    })
  })
}

const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled('ul')(({ theme }) => ({
  // width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li[data-focus="true"]': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

function BookingForm() {

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: top100Films,
    getOptionLabel: (option) => {
      return option.title;
    } ,
  });

  const [location, setLocation] = React.useState('');
  const [name, setName] = React.useState('');
  const [purpose, setPurpose] = React.useState('');
  const [days, setDays] = React.useState('');
  const [vaccination, setVaccinations] = React.useState('');


  return(
    <Box>
      <FormControl sx={{ m:1, minWidth: 120 }}>
        <TextField name="name" required id="outlined-basic" label="Name and Surname" onChange={(event) => setName(event.target.value)} variant="outlined" />
      </FormControl>
      <FormControl sx={{ m:1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="location"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={(event) => setLocation(event.target.value)}
        >
          <MenuItem value="kharkov">Kharkov</MenuItem>
          <MenuItem value="dnipro">Dnipro</MenuItem>
          <MenuItem value="kiev">Kiev</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m:1, minWidth: 220 }}>
        <InputLabel required id="demo-simple-select-label">Purpose of WFO</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="purpose"
          id="demo-simple-select"
          value={purpose}
          label="Purpose"
          onChange={(event) => setPurpose(event.target.value)}
        >
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="personal">Personal</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m:1, minWidth: 220 }}>
        <InputLabel required id="demo-simple-select-label">How many days do you want to WFO</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="days"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={(event) => setDays(event.target.value)}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m:1, minWidth: 120 }}>
        <TextField name="date" required id="outlined-basic" label="Date" variant="outlined" />
      </FormControl>
      <FormControl sx={{ m:1, minWidth: 120 }}>
        <Label {...getInputLabelProps()}>Preferable Room / Zone</Label>
        <Input {...getInputProps()}  />
      </FormControl>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </Listbox>
      ) : null}
      <FormControl sx={{ m:1, minWidth: 220 }}>
        <InputLabel required id="demo-simple-select-label">Vaccinated ?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="vaccination"
          id="demo-simple-select"
          value={vaccination}
          label="Vaccinated ?"
          onChange={(event) => setVaccinations(event.target.value)}
        >
          <MenuItem value="1">Yes</MenuItem>
          <MenuItem value="0">No</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m:1, minWidth: 120 }}>
        <TextField name="info" required id="outlined-basic" label="Additional wishes (specific equipment, room for 1 person etc.)" variant="outlined" />
      </FormControl>
      <br />
      <Button onClick={sendRequest} variant="outlined">Send Request</Button>
    </Box>
    );
} 

export default BookingForm