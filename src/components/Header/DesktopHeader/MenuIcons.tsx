import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Fab, useMediaQuery } from '@material-ui/core';
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
  Brightness4 as Brightness4Icon,
} from '@material-ui/icons';
import classNames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './mu-styles';
import { Badge, Typography } from 'components/Wrappers';
import { messages, notifications } from './mocks';

export default function MenuIcons() {
  const classes = useStyles();
  const [mailMenu, setMailMenu] = useState<Element | null>(null);
  const [isMailsUnread, setIsMailsUnread] = useState(true);
  const [notificationsMenu, setNotificationsMenu] = useState<Element | null>(null);
  const [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  const [profileMenu, setProfileMenu] = useState<Element | null>(null);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <div className='menu-icons-container'>
        <IconButton
          color='inherit'
          aria-haspopup='true'
          aria-controls='mail-menu'
          onClick={e => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classNames(classes.headerMenuButton, {
            [classes.marginLeftAuto]: true,
          })}
        >
          <Badge badgeContent={isNotificationsUnread ? notifications.length : null} color='warning'>
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          color='inherit'
          aria-haspopup='true'
          aria-controls='mail-menu'
          onClick={e => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge badgeContent={isMailsUnread ? messages.length : null} color='warning'>
            <MailIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup='true'
          color='inherit'
          className={classes.headerMenuButton}
          aria-controls='profile-menu'
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>

        <Menu
          id='profile-menu'
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant='h4' weight='medium'>
              {` qwewer werr`}
            </Typography>
            <Typography className={classes.profileMenuLink} component='a' color='primary' href='https://google.com'>
              Company.com
            </Typography>
          </div>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem className={classNames(classes.profileMenuItem, classes.headerMenuItem)}>
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography className={classes.profileMenuLink} color='primary'>
              Sign Out
            </Typography>
          </div>
        </Menu>
      </div>
    </>
  );
}
