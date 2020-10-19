import Box from '@material-ui/core/Box';
import React from 'react';
import './searchTile.scss';

const SearchTile: React.FC = props => {
  return (
    <Box boxShadow={2} className="search-tile">
      <input type="text" name="search-input" className="search-input" id="search-input" placeholder="Search" />
    </Box>
  );
};

export default SearchTile;
