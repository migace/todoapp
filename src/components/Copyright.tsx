import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export const Copyright: React.FC<unknown> = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="http://tiptopdesign.pl">
      tiptopdesign Michał Gacek
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);
