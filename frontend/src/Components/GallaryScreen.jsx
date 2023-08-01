import React from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useNavigate } from 'react-router-dom';

const GallaryScreen = (props) => {
  const Navigate = useNavigate();
  const handleClick = (event) => {
    props.state.setSrc(event.target.src);
    Navigate('/resize');
  };
  const images = [
    { src: 'https://picsum.photos/id/237/97/97', alt: 'random1' },
    { src: 'https://picsum.photos/id/238/97/97', alt: 'random2' },
    { src: 'https://picsum.photos/id/239/97/97', alt: 'random3' },
    { src: 'https://picsum.photos/id/240/97/97', alt: 'random4' },
    { src: 'https://picsum.photos/id/241/97/97', alt: 'random5' },
    { src: 'https://picsum.photos/id/242/97/97', alt: 'random6' },
    { src: 'https://picsum.photos/id/243/97/97', alt: 'random7' },
    { src: 'https://picsum.photos/id/244/97/97', alt: 'random8' },
    { src: 'https://picsum.photos/id/231/97/97', alt: 'random9' },
    { src: 'https://picsum.photos/id/232/97/97', alt: 'random10' },
    { src: 'https://picsum.photos/id/247/97/97', alt: 'random11' },
    { src: 'https://picsum.photos/id/248/97/97', alt: 'random12' },
    { src: 'https://picsum.photos/id/249/97/97', alt: 'random13' },
    { src: 'https://picsum.photos/id/250/97/97', alt: 'random14' },
    { src: 'https://picsum.photos/id/251/97/97', alt: 'random15' },
    { src: 'https://picsum.photos/id/252/97/97', alt: 'random16' },
    { src: 'https://picsum.photos/id/253/97/97', alt: 'random17' },
    { src: 'https://picsum.photos/id/254/97/97', alt: 'random18' },
  ];
  return (
    <div className="c1-outer container-sm">
      <div className="c2-back">
        <Link to="/createpost" className="rrd-link">
          <ArrowBackOutlinedIcon />
        </Link>
      </div>
      <div className="c3-next">
        <Link to="/create" className="rrd-link" style={{ color: '#fff' }}>
          Next
        </Link>
      </div>
      <div className="c3-text">Select from your gallary</div>
      <div className="c3-gallary row">
        {images.map((image, index) => (
          <div className="c3-img col-4" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              // width="97px"
              // height="97px"
              style={{ borderRadius: '15px' }}
              onClick={(event) => handleClick(event)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallaryScreen;
