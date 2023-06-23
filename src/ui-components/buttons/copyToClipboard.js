/** @format */

import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CopyToClipboardButton = link => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(link.link);
  };

  return (
    <>
      <Tooltip title="Copy URL">
        <IconButton
            color='primary'
            aria-label='Copy URL'
            component='label'
            onClick={handleClick}
        >
          <ContentCopyIcon/>
        </IconButton>
      </Tooltip>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
        message='Copied to clipboard'
      />
    </>
  );
};

export default CopyToClipboardButton;
