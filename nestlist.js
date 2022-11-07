import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FlightIcon from '@mui/icons-material/Flight';
import PlaceIcon from '@mui/icons-material/Place';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import ExploreIcon from '@mui/icons-material/Explore';
import HelpIcon from '@mui/icons-material/Help';
import { Box } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';

export default function NestedList() {
    
    const [openPlace, setOpenPlace] = React.useState(false);

    const handleClickPlace = () => {
        setOpenPlace(!openPlace);
    }
    const [openTrip, setOpenTrip] = React.useState(false);

    const handleClickTrip = () => {
        setOpenTrip(!openTrip);
  };

  return (
    <Box flex={1}>
         <p style={{fontSize:"21px",paddingLeft:"19%",fontStyle:"italic",color:"black",backgroundColor:"ghostWhite"}}>Ticket Booking System</p>
            <List
      sx={{width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         
        </ListSubheader>
      }
    >
    <ListItemButton>
        <ListItemIcon>
            <LocalGroceryStoreOutlinedIcon color='action'/>
            </ListItemIcon>
            <ListItemText primary='My Trip'/>
        </ListItemButton>
        <ListItemButton onClick={handleClickPlace}>
            <ListItemIcon>
                <PlaceIcon />
            </ListItemIcon>
            <ListItemText primary="Choose Place" />
            {openPlace ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
            <Collapse in={openPlace} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PlaceIcon/>
            </ListItemIcon>
            <ListItemText primary="From" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PinDropIcon/>
            </ListItemIcon>
            <ListItemText primary="To" />
          </ListItemButton>
        </List>
            </Collapse>
        <ListItemButton onClick={handleClickTrip}>
            <ListItemIcon>
                <FlightIcon />
            </ListItemIcon>
        <ListItemText primary="Plan Your Trip" />
        {openTrip ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openTrip} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <CardGiftcardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Coupons" />
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Wishlist" />
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <AirplaneTicketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tickets" />
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <ExploreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Explore" />
                </ListItemButton>
            </List>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItemButton>
            </List>
      </Collapse>
    </List>
    </Box>
    
  );
}
