import PropTypes from 'prop-types';
import { Stack, } from '@mui/material';


export const TenantSwitch = (props) => {

  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        {...props}>
      </Stack>
    </>
  );
};

TenantSwitch.propTypes = {
  sx: PropTypes.object
};
