import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';

type Props = {
  title: string;
  contentText: string;
  actionBtnText: string;
  confirmAction: () => void;
  cancelAction: () => void;
};

export default function ConfirmDialog({ title, contentText, actionBtnText, confirmAction, cancelAction }: Props) {
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleDialogClose = () => {
    setDialogOpen(false);
    cancelAction();
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleConfirmedAction = () => {
    confirmAction();
    handleDialogClose();
  };

  return (
    <div style={{ display: 'inline' }}>
      <Dialog open={dialogOpen} onClose={handleDialogOpen}>
        <DialogTitle disableTypography>
          <Typography color='secondary' variant='h6'>
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>{contentText}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color='secondary' variant='outlined' size='small'>
            Cancel
          </Button>
          <Button onClick={handleConfirmedAction} color='primary' variant='contained' size='small'>
            {actionBtnText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
