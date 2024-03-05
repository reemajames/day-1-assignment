import { Tabs } from 'antd';
import Camera from './components/Camera';
import Laptop from './components/Laptop';
import Phone from './components/Phone';
import Watch from './components/Watch';
const { TabPane } = Tabs;
const handleTabClick = (key) => {
    console.log(`Tab ${key} clicked`);
};

function Dashboard() {
    return (
        <div className="ecommerce-app">
            <h1>Product Dashboard</h1>
            <div className='tabs'>
            <Tabs defaultActiveKey="1" className='tabs-wrap' onChange={handleTabClick}>
                <TabPane tab="Camera" key="1">
                    <div className='tab-content-wrap'>
                        <Camera />
                    </div>
                </TabPane>
                <TabPane tab="Laptop" key="2">
                    <div className='tab-content-wrap'>
                        <Laptop />
                    </div>
                </TabPane>
                <TabPane tab="Phone" key="3">
                    <div className='tab-content-wrap'>
                        <Phone />
                    </div>
                </TabPane>
                <TabPane tab="Watch" key="4">
                    <div className='tab-content-wrap'>
                        <Watch />
                    </div>
                </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Dashboard;