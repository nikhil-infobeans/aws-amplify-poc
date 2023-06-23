/** @format */

import Typography from '@mui/material/Typography';

export default function Footer(props) {
  return (
    <div className='footer-section'>
      <Typography variant='body2' color='text.secondary' align='center' {...props}>
        {'Copyright © '}
        AWS Amplify POC {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}
