import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import {AppBar, Toolbar, Avatar} from '@mui/material';
import { format } from 'date-fns';

const drawerWidth = 240;
const useStyles = makeStyles((theme)=> {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: 30,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      backgroundColor: '#f4f4f4',
    },
    appbar: {
      width: '-webkit-calc(100% - 240px)',
    },
    title: {
      padding: 20
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    }
  }
});

function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='primary' />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color='primary' />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/*APP BAR */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date} sx={{pl: 30}}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography >
            John Doe
          </Typography>
          <Avatar src='https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png' className={classes.avatar}/>
        </Toolbar>
      </AppBar>
      {/*SIDE DRAWER */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>My Notes</Typography>
        </div>
        <List>
          {menuItems.map(item =>(
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}</div>
    </div>
  );
}

export default Layout;
