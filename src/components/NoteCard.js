import React from 'react';
import { IconButton, CardContent, CardHeader, Card, Avatar} from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === 'Works') {
        return '2px solid #aa7af0';
      } else if (note.category === 'Reminders') {
        return '2px solid #ff9800';
      } else if (note.category === 'Todos') {
        return '2px solid #f44336';
      } else if (note.category === 'Money') {
        return '2px solid #4caf50';
      } else {
        return '2px solid #9e9e9e';
      }
    }
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'Works') {
        return '#aa7af0';
      } else if (note.category === 'Reminders') {
        return '#ff9800';
      } else if (note.category === 'Todos') {
        return '#f44336';
      } else if (note.category === 'Money') {
        return '#4caf50';
      } else {
        return '#9e9e9e';
      }
  }
},
})

function NoteCard({note, handleDelete}) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader 
        avatar= {
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        /> 
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard