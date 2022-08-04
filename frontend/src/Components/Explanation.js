import { Add, Cached } from "@mui/icons-material";
import { Box, CardMedia, IconButton } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useRef } from "react";
import devImage from "./images/dev.jpg";
import devImage2 from "./images/dev2.jpg";
import "./Explanation.css";

export default function Explanation(props) {
  const chooseImg = (number) => {
    if (number === 1) {
      return devImage;
    }
    if (number === 2) {
      return devImage2;
    }
  };

  const inputRef = useRef(null);
  const imageUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };

  const [number, setNumber] = useState(1);
  return (
    <Fragment>
      <div className="cautionBox">
        <Box className="imageBox">
          <div className="cardMedia-container">
            <h3 className="threat"> この画像がツイートされてしまうわん！</h3>
            <CardMedia
              component="img"
              image={chooseImg(number)}
              style={{
                alignSelf: "center",
                justifySelf: "center",
                width: "50%",
              }}
              className="tweetPhoto"
            />
            <Box>
              <IconButton className="icon-button" onClick={imageUpload}>
                <Add />
              </IconButton>
              <IconButton
                onClick={() => setNumber(number === 2 ? 1 : number + 1)}
                className="icon-button"
              >
                <Cached />
              </IconButton>
            </Box>
          </div>
        </Box>
      </div>
      <input hidden ref={inputRef} type="file" accept="image/*" />
    </Fragment>
  );
}
