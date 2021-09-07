import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

type Props = {
  errorMsg: string;
  clearErrorMsg: () => void;
};

export default function ErrorBox({ errorMsg, clearErrorMsg }: Props) {
  if (!errorMsg) return null;

  return (
    <div style={{ width: '100%', marginTop: '0.8em', marginBottom: '0.8em' }}>
      <Alert severity='error' onClose={clearErrorMsg}>
        <AlertTitle>Error</AlertTitle>
        {errorMsg}
      </Alert>
    </div>
  );
}
