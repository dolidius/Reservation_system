import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { getSeats } from '../../../redux/actions/seatsActions';

import { Form, InputNumber, Button, Checkbox } from 'antd';

import { RouteComponentProps } from 'react-router-dom';

import { ViewportContainer } from '../../../styles/Layout/Container.style';

import IFormValues from '../../../interfaces/IFormValues';

interface IProps {
    history: RouteComponentProps['history'];
    getSeats: (seatsToChoose: number, nextToEachOther: boolean) => void;
}

const Home: React.FC<IProps>  = ({ history, getSeats }) => {

    const [form] = Form.useForm();

    const onFinish = (values: IFormValues) => {
        getSeats(values.tickets_number, values.next_to_each_other);
        history.push({
            pathname: "/rezerwacja",
        });
    }

    return (
        <ViewportContainer centered>
            <Form form={form} name="tickets" onFinish={onFinish}>
                <Form.Item name="tickets_number" rules={[{ required: true }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name="next_to_each_other" valuePropName="checked" initialValue={false}>
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