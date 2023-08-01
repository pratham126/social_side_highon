import React, { useContext, useEffect, useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from './Store';
import filters from '../Images/resize_filters.png';

const ResizeScreen = () => {
  const [ratio, setRatio] = useState('16/9');
  const Navigate = useNavigate();
  const { src } = useContext(Store);
  useEffect(() => {
    if (src.length === 7) Navigate('/gallary');
  }, [Navigate, src]);
  return (
    <div className="c1-outer container-sm">
      <div className="c2-back">
        <Link to="/gallary" className="rrd-link">
          <ArrowBackOutlinedIcon />
        </Link>
      </div>
      <Link to="/newpost" className="rrd-link" style={{ color: '#fff' }}>
        <div className="c3-next" style={{ backgroundColor: '#00B2E8' }}>
          Next
        </div>
      </Link>
      <div className="c4-imgbg">
        <img
          src={src}
          alt="selected img"
          className="c4-img"
          style={{ aspectRatio: ratio }}
        />
      </div>
      <div className="c4-ratio">
        <div className="c4-ratio-text">Aspect Ratio</div>
        <div className="c4-ratios">
          <div
            style={{ color: '#7B7B7B', textAlign: 'center' }}
            onClick={() => setRatio('1/1')}
          >
            <div
              className="c4-1by1"
              style={
                ratio === '1/1'
                  ? {
                      border: '3px solid #00B2E9',
                      width: '42px',
                      height: '42px',
                    }
                  : {}
              }
            ></div>
            <span
              style={
                ratio === '1/1' ? { color: '#00B2E9', fontSize: '18px' } : {}
              }
            >
              1:1
            </span>
          </div>
          <div
            style={{ color: '#7B7B7B', textAlign: 'center' }}
            onClick={() => setRatio('4/5')}
          >
            <div
              className="c4-4by5"
              style={
                ratio === '4/5'
                  ? {
                      border: '3px solid #00B2E9',
                      width: '40px',
                      height: '50px',
                    }
                  : {}
              }
            ></div>
            <span
              style={
                ratio === '4/5' ? { color: '#00B2E9', fontSize: '18px' } : {}
              }
            >
              4:5
            </span>
          </div>
          <div
            style={{ color: '#7B7B7B', textAlign: 'center' }}
            onClick={() => setRatio('16/9')}
          >
            <div
              className="c4-16by9"
              style={
                ratio === '16/9'
                  ? {
                      border: '3px solid #00B2E9',
                      width: '64px',
                      height: '37.5px',
                    }
                  : {}
              }
            ></div>
            <span
              style={
                ratio === '16/9' ? { color: '#00B2E9', fontSize: '18px' } : {}
              }
            >
              16:9
            </span>
          </div>
        </div>
      </div>
      <img src={filters} alt="filters" className="filters" />
    </div>
  );
};

export default ResizeScreen;
