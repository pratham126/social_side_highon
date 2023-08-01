import React, { useState } from 'react';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../Images/highonlogo.png';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Homepage = () => {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem('likes'))
      ? JSON.parse(localStorage.getItem('likes'))
      : []
  );
  const handleClick = (index) => {
    if (likes.includes(index)) setLikes(likes.filter((item) => item !== index));
    else setLikes((prv) => [...prv, index]);
    localStorage.setItem('likes', JSON.stringify(likes));
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
    <div className="container-sm c1-outer">
      <div className="c1" style={{ height: '100%', backgroundColor: '#fff' }}>
        <nav className="navbar">
          <div className="container-fluid con-nav">
            <div className="img-cont">
              <img
                className="navbar-brand"
                src={logo}
                width="100%"
                height="100%"
                alt="highon logo"
              />
            </div>
            <div>
              <button className="btn" type="button">
                <Link to="/create" className="rrd-link">
                  <AddBoxOutlinedIcon />
                </Link>
              </button>
              <button className="btn" type="button">
                <Link to="/search" className="rrd-link">
                  <SearchIcon />
                </Link>
              </button>
            </div>
          </div>
        </nav>
        <div className="c3-gallary row">
          {images.map((image, index) => (
            <div className="col-6" key={index} style={{ padding: '2px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: '15px' }}
                />
                {likes.includes(index) ? (
                  <FavoriteIcon
                    className="heart"
                    style={{ color: 'red' }}
                    onClick={() => handleClick(index)}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="heart"
                    onClick={() => handleClick(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
