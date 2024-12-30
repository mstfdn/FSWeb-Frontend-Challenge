/* eslint-disable react/prop-types */
import Switch from '@mui/material/Switch';

const CustomSwitch = ({ isChecked, handleSwitchChange }) => {
  return (
    <Switch
      checked={isChecked}
      onChange={handleSwitchChange}
      color="default"
      inputProps={{ 'aria-label': 'Dark Mode Switch' }}
      sx={{
        '& .MuiSwitch-switchBase': {
          color: isChecked ? '#f5a623' : '#fff',
        },
        '& .MuiSwitch-track': {
          backgroundColor: isChecked ? '#000' : '#f5a623', // Karanlık modda siyah, aydınlık modda sarı
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: isChecked ? '#000' : '#f5a623',
        },
        '& .MuiSwitch-thumb:before': {
          content: isChecked ? `'🌙'` : `'🌞'`,
          fontSize: '1.5rem',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }
      }}
    />
  );
};

export default CustomSwitch;
