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
} from '@mui/material';
import React, { useRef, useState } from 'react';
import {
  AccountCircle,
} from '@mui/icons-material';

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [calorie, setCalorie] = useState("");
  const inputRef = useRef(null);
  const imageUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };
  return (
    <header>
      <h1 className="service-title">regretter</h1>
      <Button 
        onClick={() => setIsDialogOpen(true)}
      >
          <AccountCircle className="user-icon"/>
      </Button>
      <Dialog open={isDialogOpen} fullWidth maxWidth="md">
        <DialogTitle>設定</DialogTitle>
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
              <TextField onChange={(e) => setAge(e.target.value)} value={age} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>目標カロリー</TableCell>
            <TableCell>
              <TextField
                onChange={(e) => setCalorie(e.target.value)}
                value={calorie}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button onClick={() => setIsDialogOpen(false)}>キャンセル</Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => setIsDialogOpen(false)}>保存</Button>
            </TableCell>
          </TableRow>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;