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
} from '@mui/material';
import React, { useRef, useState } from 'react';
import {
  AccountCircle,
} from '@mui/icons-material';

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const inputRef = useRef(null);
  const imageUpload = () => {
    console.log(inputRef.current);
    inputRef.current?.click();
  };
  const [isSign,setIsSign] = useState(false);
  return (
    <header>
      <h1 className="service-title">Regretter</h1>
      <Box className="iconBox">
      <Button
        onClick={() => setIsDialogOpen(true)}
      >
          <AccountCircle className="user-icon"/>
      </Button>
      </Box>
      <Dialog open={isDialogOpen} fullWidth maxWidth="md"
        PaperProps={{
          style: {
            boxShadow: "none",
            textAlign: "center",
            width:'auto',
          },
        }}>
        <DialogTitle>{!isSign?'最初に設定を入力してね！':'設定'}</DialogTitle>
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
            <Select value={sex} onChange={(e)=>setSex(e.target.value)}>
              <MenuItem value='男'>
              男
              </MenuItem>
              <MenuItem value='女'>
              女
              </MenuItem>
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
            <TableCell >年齢</TableCell>
            <TableCell>
              <TextField onChange={(e) => setAge(e.target.value)} value={age} />
            </TableCell>
          </TableRow>
          <TableRow >
            <TableCell>
              <Button onClick={() => setIsDialogOpen(false)}>キャンセル</Button>
            </TableCell>
            <TableCell>
              <Button disabled={(age === ''||weight===''||sex==='')}onClick={() => {setIsDialogOpen(false);setIsSign(true)}}>保存</Button>
            </TableCell>
          </TableRow>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;