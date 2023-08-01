import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Link } from 'react-router-dom';
const CreateScreen = () => {
  return (
    <div className="container-sm c1-outer">
      <div className="c1">
        <div className="c1-cross">
          <Link to="/" className="rrd-link" style={{ color: '#434343' }}>
            <CancelIcon />
          </Link>
        </div>
        <div className="c1-post">
          <Link to="/createpost" className="rrd-link">
            <AddBoxOutlinedIcon />{' '}
            <span style={{ marginLeft: '28px' }}>Create a Post</span>
          </Link>
        </div>
        <div className="c1-story">
          <Link to="/createstory" className="rrd-link">
            <AddBoxOutlinedIcon />{' '}
            <span style={{ marginLeft: '28px' }}>Create a Story</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateScreen;
