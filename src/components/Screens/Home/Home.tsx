import React from 'react';

import { Form, InputNumber, Button, Checkbox } from 'antd';

import { ViewportContainer } from '../../../styles/Layout/Container.style';

const Home = () => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    }

    return (
        <ViewportContainer centered>
            <Form form={form} name="tickets" onFinish={onFinish}>
                <Form.Item name="tickets_number" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item>
                    <Checkbox>
                        Czy miejsca mają być obok siebie?
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </ViewportContainer>
    )
}

export default Home;