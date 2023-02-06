import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PixIcon from '@mui/icons-material/Pix';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export const Notification = ({ iconColor, badgeContent }) => {
  return (

    <div className='NotificationMenu'>
      <Link to='alert'>
      <Tooltip title="ATUALIZAÇÕES">
        <IconButton
          color="iconColor">
          <Badge

            badgeContent={2}
            color="error">
            <NotificationsActiveIcon
              sx={{ fill: 'grey' }}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      </Link>

      <Link to='pix'>
        <Tooltip title="FAÇA UM PIX">
          <IconButton color="iconColor">
            <Badge
              badgeContent={2}
              color="error"
            >
              <PixIcon sx={{ fill: 'green' }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Link>

      <Link to='calendar'>
        <Tooltip title="CRONOGRAMA">
          <IconButton>
            <Badge
              badgeContent={1}
              color="error"
            >
              <CalendarMonthIcon sx={{ fill: 'blue' }} />
            </Badge>
          </IconButton>
        </Tooltip>
      </Link>



    </div>
  )
}
