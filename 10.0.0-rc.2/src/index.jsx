import { h, render } from 'preact';
import { Popover, Button } from 'antd';
import "antd/dist/antd.css";

const Content = () => <div style={({ height: '50px', width: '100px' })}>Hello</div>;
const Test = () => (
    <Popover content={<Content />} placement="bottom" trigger="hover">
        <Button type="primary">Hover at me</Button>
    </Popover>
);

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);
render(<Test />, app);