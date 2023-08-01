import React, { useEffect, useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const PostScreen = (props) => {
  const [people, setPeople] = useState([]);
  const Navigate = useNavigate();
  useEffect(() => {
    if (props.state.src.length === 7) Navigate('/gallary');
  }, [Navigate, props.state.src]);
  return (
    <div
      className="c1-outer container-sm"
      style={{ backgroundColor: '#F7F7F7' }}
    >
      <div className="c2-back">
        <Link to="/resize" className="rrd-link">
          <ArrowBackOutlinedIcon />
        </Link>
      </div>
      <div
        className="c3-next"
        style={
          people.length === 0
            ? { backgroundColor: '#414141' }
            : { backgroundColor: '#00B2E8' }
        }
      >
        {people.length > 0 ? (
          <Link
            to="/"
            className="rrd-link"
            style={{
              color: '#fff',
              backgroundColor: people.length > 0 ? '#00B2E8' : '#414141',
            }}
          >
            Post
          </Link>
        ) : (
          <p
            className="rrd-link"
            style={{
              marginTop: '12px',
              color: '#fff',
              backgroundColor: people.length > 0 ? '#00B2E8' : '#414141',
            }}
          >
            Post
          </p>
        )}
      </div>
      <div className="c5_body">
        <img className="thumbnail" src={props.state.src} alt="thumbnail" />
        <p className="desc-h">Description</p>
        <textarea className="desc-text"></textarea>
        <hr className="c5_hr" />
        <div className="c5_tag-row">
          <span
            className="c5_tag"
            onClick={() => {
              setPeople((prv) => [...prv, 'new person added']);
            }}
          >
            <LocalOfferIcon style={{ marginRight: '8px' }} />
            Tag People
          </span>
          <ArrowForwardIosIcon />
        </div>
        {people.length > 0 &&
          people.map((person, index) => (
            <span
              key={index}
              className="vibetags"
              style={{ border: 'none', marginTop: '15px' }}
            >
              {person}
            </span>
          ))}
        <hr className="c5_hr" />
        <div className="c5_tag-row">
          <span className="c5_tag">
            <LocationOnIcon style={{ marginRight: '8px' }} />
            Location
          </span>
          <ArrowForwardIosIcon />
        </div>
        <hr className="c5_hr" />
        <p className="desc-h" style={{ color: '#7B7B7B', marginTop: 0 }}>
          Add your vibetags
        </p>
        <div className="vibetage-div">
          <span className="vibetags">
            <CameraEnhanceIcon style={{ width: '20px' }} /> Photography
          </span>
          <span className="vibetags">
            <FastfoodIcon style={{ width: '20px' }} /> Food vlogs
          </span>
          <span className="vibetags">
            <VideogameAssetIcon style={{ width: '20px' }} /> Gaming
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostScreen;
