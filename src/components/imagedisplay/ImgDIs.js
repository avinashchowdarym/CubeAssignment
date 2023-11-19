// Used material-ui https://material-ui.com/en/components for the 3x3 grid

import React from "react";
import { useEffect, useState } from "react";
const imgUrl = [
  "https://picsum.photos/200/200",
  "https://picsum.photos/id/236/200",
  "https://picsum.photos/id/237/200/200",
  "https://picsum.photos/seed/picsum/200/200",
  "https://picsum.photos/200/200?grayscale",
  "https://picsum.photos/200/200/?blur",
  "https://picsum.photos/200/200/?blur=2",
  "https://picsum.photos/200/200.jpg",
  "https://picsum.photos/200/200.webp"
];

export default function ImgDis() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (index == 9 ? 0 : prevIndex + 1));
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="gallery">
        <img src={imgUrl[(index + 1) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 2) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 3) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 4) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 5) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 6) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 7) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 8) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
        <img src={imgUrl[(index + 9) % 9]} style={{ borderRadius:'15px',padding: "10px 10px" }} />
      </div>
    </div>
  );
}
