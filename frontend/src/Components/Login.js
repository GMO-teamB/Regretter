import { Button, Card, CardActionArea, CardHeader } from "@mui/material"
import "./Login.css";

export default function LoginPage(){
    return (
        <div className="pageContentContainer">
            <div className="spacer"></div>
            <div className="logo">Regretter</div>
            <Card className="loginBox">
                <CardHeader>ログイン</CardHeader>
                {/* ここにログインフォームを表示 */}
                <Button>ログイン</Button>
            </Card>
        </div>
    )
}