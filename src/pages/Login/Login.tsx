import {Button, Checkbox, Form, Input} from "antd";
import {FC} from "react";
import s from './style.module.scss'
import {useNavigate} from "react-router-dom";
import {userApi} from "../../API/userApi";

interface ILoginForm {
    password: string,
    remember: boolean,
    username: string
}


export const Login: FC = () => {

    const navigate = useNavigate()
    const [login, {...res}] = userApi.useAuthLoginMutation()

    const onFinish = async (value: ILoginForm) => {
        const response = await login({
            password: value.password,
            email: value.username,
            rememberMe: true,
            captcha: true
        }).unwrap()

        if (response.resultCode === 0) {
            navigate('/')
        } else {
            console.log(response.messages[0])
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className={s.login}>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                size='large'
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, type: 'email', message: 'Please input your email!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form.Item>

                {res.data?.messages && <div className={s.error}>{res.data?.messages}</div>}


            </Form>
        </div>

    )
}