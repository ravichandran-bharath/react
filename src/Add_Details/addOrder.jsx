import React, { Component } from 'react';
import { Layout, Menu, Icon, Card } from 'antd';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';

// import matchSorter from 'match-sorter'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";



const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

export default class AddOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {

            orders: [],
            data: []
            
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/fetchAllOrders",{
        })
        
        .then((response)=>{
            this.setState({
                
                orders : response.data,
                data : response.data

            });  
        });    
    }


  render () {
    const { orders } = this.state;
    return (
      <div>
        AddOrder. This is a protected route. You can only see this if you're authed.
        <div>
          <h1>Home Component</h1>
          
          <Layout>
              <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
              >
                  <div className="logo" />
                  <Menu
                    theme = 'dark'
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    >
                    <Menu.Item key="1">
                        <Icon type="file" />
                            Admin AddOrder
                        <Link to="/AddOrder"></Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="bars" /><span>Store Master</span></span>}>
                        <Menu.Item key="2"><Link to="/addStores">Add Store</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/modifyStore">Modify Store</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Product Master</span></span>}>
                        <Menu.Item key="4"><Link to="/addProducts">Add Product</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/modifyProduct">Modify Product</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Admin Master</span></span>}>
                        <Menu.Item key="6"><Link to="/addAdmin">Add Admin</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/modifyAdmin">Modify Admin</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="user-add" /><span>Customer Master</span></span>}>
                        <Menu.Item key="8"><Link to="/addCustomers">Add Customer</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/deleteAdmin">Modify Admin</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="slack-square" /><span>Brand Master</span></span>}>
                        <Menu.Item key="10"><Link to="/addBrands">Add Brand</Link></Menu.Item>
                        <Menu.Item key="11"><Link to="/deleteBrands">Modify Brand</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="windows" /><span>Category Master</span></span>}>
                        <Menu.Item key="12"><Link to="/addCategories">Add Category</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/deleteCategories">Modify Category</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub7" title={<span><Icon type="pushpin" /><span>Featured Product Master</span></span>}>
                        <Menu.Item key="14"><Link to="/addFeaturedProducts">Add Featured Product</Link></Menu.Item>
                        <Menu.Item key="15"><Link to="/deleteFeaturedProducts">Modify Featured Product</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub8" title={<span><Icon type="tag" /><span>Offers Master</span></span>}>
                        <Menu.Item key="16"><Link to="/addOffers">Add Offer</Link></Menu.Item>
                        <Menu.Item key="17"><Link to="/deleteOffers">Modify Offer</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub9" title={<span><Icon type="credit-card" /><span>Payment Master</span></span>}>
                        <Menu.Item key="18"><Link to="/addPayments">Add Payment</Link></Menu.Item>
                        <Menu.Item key="19"><Link to="/deletePayments">Modify Payment</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub10" title={<span><Icon type="aliwangwang" /><span>Push Notification Master</span></span>}>
                        <Menu.Item key="20"><Link to="/addPushNotifications">Add Push Notification</Link></Menu.Item>
                        <Menu.Item key="21"><Link to="/deletePushNotifications">Modify Push Notification</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub11" title={<span><Icon type="star" /><span>Reward Master</span></span>}>
                        <Menu.Item key="22"><Link to="/addRewards">Add Reward</Link></Menu.Item>
                        <Menu.Item key="23"><Link to="/deleteRewards">Modify Reward</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub12" title={<span><Icon type="rocket" /><span>Shipping Master</span></span>}>
                        <Menu.Item key="24"><Link to="/addShippings">Add Shipping</Link></Menu.Item>
                        <Menu.Item key="25"><Link to="/deleteShippings">Modify Shipping</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub13" title={<span><Icon type="swap" /><span>Order Management Master</span></span>}>
                        <Menu.Item key="29"><Link to="/addOrder">Add Order</Link></Menu.Item>
                        <Menu.Item key="30"><Link to="/modifyOrder">Modify Order</Link></Menu.Item>
                    </SubMenu>

                    <Menu.Item key="26">
                        <Icon type="solution" />
                            Reviews and Comments
                        <Link to="/ReviewsComments">                            
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item key="27">
                        <Icon type="key" />
                            Change Password
                        <Link to="/changePassword">                            
                        </Link>
                    </Menu.Item>
                </Menu>
              </Sider>

              <Layout>
                  <Header style={{ background: '#fff', padding: 0 }} />

                  <Content style={{ margin: '24px 16px 0' }}>
                      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                         Add Order content
                        <Card>
                            <div>
                                <ReactTable
                                data={orders}
                                filterable
                                defaultFilterMethod={(filter, row) =>
                                    String(row[filter.id]) === filter.value}
                                columns={[
                                    {
                                    columns: [
                                        {
                                        Header: "OrderID",
                                        accessor: "orderId",
                                        filterMethod: (filter, row) =>
                                            row[filter.id].startsWith(filter.value) &&
                                            row[filter.id].endsWith(filter.value)
                                        },
                                    ]
                                    },
                                    {
                                    columns: [
                                        {
                                        Header: "Phone number",
                                        accessor: "customerPhone",
                                        filterMethod: (filter, row) =>
                                            row[filter.id].startsWith(filter.value) &&
                                            row[filter.id].endsWith(filter.value)
                                        },
                                    ]
                                    },
                                    {
                                    columns: [
                                        {
                                        Header: "Date and Time",
                                        accessor: "time",
                                        filterMethod: (filter, row) =>
                                            row[filter.id].startsWith(filter.value) &&
                                            row[filter.id].endsWith(filter.value)
                                        },
                                    ]
                                    },
                                    {
                                    columns: [
                                        {
                                        Header: "Total",
                                        accessor: "total",
                                        filterMethod: (filter, row) =>
                                            row[filter.id].startsWith(filter.value) &&
                                            row[filter.id].endsWith(filter.value)
                                        },
                                    ]
                                    },
                                    {
                                    columns: [
                                        {
                                        Header: "Status",
                                        accessor: "status"
                                        },
                                        {
                                        Header: "status",
                                        accessor: "status",
                                        id: "status",
                                        filterMethod: (filter, row) => {
                                            if (filter.value === "all") {
                                                row[filter.id].startsWith(filter.value) &&
                                                row[filter.id].endsWith(filter.value)
                                                return true;
                                            }
                                            
                                        },
                                        Filter: ({ filter, onChange }) =>
                                            <select
                                            onChange={event => onChange(event.target.value)}
                                            style={{ width: "100%" }}
                                            value={filter ? filter.value : "all"}
                                            >
                                                <option value="all">Show All</option>
                                                <option value="pending">Pending</option>
                                                <option value="accepted">Accepted</option>
                                                <option value="rejected">Rejected</option>
                                                <option value="cancelled">Cancelled</option>
                                                <option value="delivered">Delivered</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        }
                                    ]
                                    },
                                    
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                                />
                                <br />
                            </div>
                         </Card>
                      </div>
                  </Content>
                  
                  <Footer style={{ textAlign: 'center' }}>
                      Ant Design ©2016 Created by Ant UED
                  </Footer>
              </Layout>
          </Layout>
        </div>

        <Menu />
      </div>
    )
  }
}