import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getSeats } from '../../../redux/actions/seatsActions';

import { Form, InputNumber, Button, Checkbox } from 'antd';

import { RouteComponentProps } from 'react-router-dom';

import { ViewportContainer } from '../../../styles/Layout/Container.style';

interface IFormValues {
    tickets_number: number;
    next_to_each_other: boolean;
}

interface IProps {
    history: RouteComponentProps['history'];
    getSeats: () => void;
}

const Home: React.FC<IProps>  = ({ history, getSeats }) => {

    const [form] = Form.useForm();

    const onFinish = (values: IFormValues) => {
        getSeats();
        history.push("/rezerwacja");
    }

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

const mapStateToProps = () => ({});

export default connect((mapStateToProps), { getSeats })(Home);