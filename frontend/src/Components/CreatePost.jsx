import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Link } from 'react-router-dom';

const CreatePost = () => {
  return (
    <div className="c1-outer container-sm">
      <div className="c2-back">
        <Link to="/create" className="rrd-link">
          <ArrowBackOutlinedIcon />
        </Link>
      </div>
      <div className="c2-gallary">
        <Link to="/gallary" className="rrd-link">
          <CollectionsIcon />
          <span style={{ marginLeft: '28px' }}>Pick from gallary</span>
        </Link>
      </div>
      <div className="c2-camera">
        <Link to="/camera" className="rrd-link">
          <AddAPhotoIcon />
          <span style={{ marginLeft: '28px' }}>Capture with camera</span>
        </Link>
      </div>
    </div>
  );
};

export default CreatePost;
