import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Link from 'next/link';


function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <Link href="../CoursesPage" passHref>
      <Button component="a" variant="outlined" size="small">
      Sign up
      </Button>
      </Link>

      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {/* {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))} */}
        {sections}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  // sections: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     url: PropTypes.string.isRequired,
  //   }),
  // ).isRequired,
  sections: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;