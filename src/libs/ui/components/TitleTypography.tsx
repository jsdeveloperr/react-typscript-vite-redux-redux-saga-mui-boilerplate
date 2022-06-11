import React from 'react';

import Typography from '@mui/material/Typography';

type PageTypographyProps = {
  title: string;
};

const TitleTypography = (props: PageTypographyProps) => (
  <>
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
    >
      {props.title}
    </Typography>
  </>
);

export default TitleTypography;
