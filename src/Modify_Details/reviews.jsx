import React, {Component} from 'react';
import MenuComponent from '../menu';
import { Layout, Card, Form, Row, Col, Input, Button } from 'antd';


const { Content, Footer, Sider } = Layout;


export default class ReviewsComments extends Component {

    render() {

        return (

            <div>
                <Layout>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={250} style={{ background: '#fff' }}>
                                <MenuComponent />
                            </Sider>
                                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                    <Card title="Reviews and Comments">
                                        <h1>Reviews and Comments</h1>
                                    </Card>
                                </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    2018 © Created by Bharath Ravichandran
                    </Footer>
                </Layout>
            </div>

        );
    }
}