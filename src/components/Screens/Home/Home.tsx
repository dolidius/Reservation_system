import React, { useEffect } from 'react';

import { Form, InputNumber, Button, Checkbox } from 'antd';

import { RouteComponentProps } from 'react-router-dom';

import { ViewportContainer } from '../../../styles/Layout/Container.style';
import axios from 'axios';

interface IFormValues {
    tickets_number: number;
    next_to_each_other: boolean;
}

interface IProps {
    history: RouteComponentProps['history'];
}

const Home: React.FC<IProps>  = ({ history }) => {

    const [form] = Form.useForm();

    const onFinish = (values: IFormValues) => {
        history.push("/rezerwacja");
    }

    useEffect(() => {
        let config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        
        axios.get('/seats', config).then(res => console.log(res.data)).catch(e => console.log(e));
    }, [])

    return (
        <ViewportContainer centered>
            <Form form={form} name="tickets" onFinish={onFinish}>
                <Form.Item name="tickets_number" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="next_to_each_other" valuePropName="checked">
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