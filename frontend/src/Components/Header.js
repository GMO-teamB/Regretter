import "./Header.css";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Box,
  Select,
  MenuItem,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import devImage from "./images/dev.jpg";

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isExplanationDialogOpen] = useState(true);
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const inputRef = useRef(null);
  const imageUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };

  const [isSign, setIsSign] = useState(false);

  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sex: { sex }, weight: { weight }, age: { age } }), //userIdもいれる
  };

  const url = "http://localhost:3000/";

  const requestData = async () => {
    try {
      const response = await fetch(url, requestOption);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>
        <NavLink to="/" className="service-title">
          Regretter
        </NavLink>
        <Box className="iconBox">
          <Button onClick={() => setIsDialogOpen(true)}>
            <AccountCircle className="user-icon" />
          </Button>
        </Box>

        <Dialog
          open={isDialogOpen}
          fullWidth
          maxWidth="md"
          PaperProps={{
            style: {
              boxShadow: "none",
              textAlign: "center",
              width: "auto",
            },
          }}
        >
          <DialogTitle className="setting">
            {!isSign ? "最初に設定を入力してね！" : "設定"}
          </DialogTitle>
          <DialogContent>
            <TableRow>
              <TableCell>
                <input hidden ref={inputRef} type="file" accept="image/*" />
                <IconButton onClick={imageUpload}>
                  <AccountCircle />
                </IconButton>
              </TableCell>
              <TableCell>山田太郎</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>性別</TableCell>
              <TableCell>
                <Select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="genderSelect"
                >
                  <MenuItem value="男">男</MenuItem>
                  <MenuItem value="女">女</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>体重</TableCell>
              <TableCell>
                <TextField
                  onChange={(e) => setWeight(e.target.value)}
                  value={weight}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>年齢</TableCell>
              <TableCell>
                <TextField
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button
                  onClick={() => setIsDialogOpen(false)}
                  className="setting-cancel-btn"
                >
                  キャンセル
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  disabled={age === "" || weight === "" || sex === ""}
                  onClick={() => {
                    setIsDialogOpen(false);
                    setIsSign(true);
                    requestData();
                  }}
                  className="setting-btn"
                >
                  保存
                </Button>
              </TableCell>
            </TableRow>
          </DialogContent>
        </Dialog>

        {!isSign && (
          <Dialog
            open={isExplanationDialogOpen}
            fullWidth
            maxWidth="md"
            PaperProps={{
              style: {
                boxShadow: "none",
                textAlign: "center",
                width: "auto",
              },
            }}
          >
            <DialogTitle className="welcome">Regretterへようこそ</DialogTitle>
            <DialogContent className="welcome-content">
              <h3 className="welcome-title">
                飽き性なエンジニアのための運動管理アプリです。
              </h3>
              <p className="welcome-p">
                目標カロリーを達成できなければ、自動的にTwitterに恥ずかしい画像と共ににあなたの醜態が晒されます。
              </p>
              <p className="imageIntro">画像例</p>
              <CardMedia
                component="img"
                image={devImage}
                style={{
                  alignSelf: "center",
                  justifySelf: "center",
                  width: "50%",
                }}
                className="tweetPhoto"
              />
              <p className="welcome-level">
                <span className="easy">Easy</span>{" "}
                <span className="normal">Normal</span>{" "}
                <span className="hard">Hard</span>とレベル分け<br></br>
                機能が搭載されています。
              </p>
              <Button
                className="welcome-btn"
                onClick={() => setIsDialogOpen(true)}
              >
                閉じる
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </header>
    </>
  );
}

export default Header;
