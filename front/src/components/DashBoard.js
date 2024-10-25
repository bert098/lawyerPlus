import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import getUser from './utils/getUser';
import { useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from 'react';
import "../styles/dashboard.css"
import Button from "./plugins/Button"

export default function (props) {
    let res = null
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (!token) {
        navigate("/");
    }
    let getUserCall = async () => {
        res = await getUser(token)
        if (res.status === 200) {
            setUser(res.data.user)
        }
    }
    let newCustomer = () => {
        console.log('client')
    }
    getUserCall()
    if (user) {
        return (
            <div>
                <div className='username'>
                    <h1>
                        {user.username}
                    </h1>
                    <div className='buttons'>
                        <Button text="Add Client"  controller={newCustomer}/>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Clients</Tab>
                        <Tab>Reports</Tab>
                    </TabList>

                    <TabPanel>
                        <h3>Client List</h3>

                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>

        )
    }
    else {
        return (
            <div></div>

        )
    }

};