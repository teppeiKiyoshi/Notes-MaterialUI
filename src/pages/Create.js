import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import {Button, Container, TextField} from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    marginTop: "20px",
  },
  btn: {
    marginTop: "20px",
  },
});

function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [details, setDetails] = React.useState('');
  const [titleError, setTitleError] = React.useState(false);
  const [detailsError, setDetailsError] = React.useState(false);
  const [category, setCategory] = React.useState('Todos');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === '') {
      setTitleError(true);
    }

    if (details === '') {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate('/'))
    }
  };

  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        sx={{ mt: 2 }}
        variant='h6'
        component='h2'
        color='textSecondary'
        align='left'
        gutterBottom
      >
        Create your notes here
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          sx={{ mt: 2}}
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          sx={{ mt: 2, mb:2}}
          label='Details'
          variant='outlined'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl sx={{display: 'block', m: '20px'}}>
          <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
              <FormControlLabel control={<Radio/>} label='Money' value='Money'/>
              <FormControlLabel control={<Radio/>} label='Todos' value='Todos'/>
              <FormControlLabel control={<Radio/>} label='Reminders' value='Reminders'/>
              <FormControlLabel control={<Radio/>} label='Works' value='Works'/>
            </RadioGroup>
        </FormControl>

        <Button
          className={classes.btn}
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          startIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
