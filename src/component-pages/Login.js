import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../MyContext";
import {Field, Form, Formik} from "formik";
import axios from "axios";
export default function Login() {
    let navigate = useNavigate();
    let {setCurrentUser} = useContext(MyContext)

    return (
        <>

            <div className="lg-reg-container">
                <h1 align={"center"}>Login</h1>
                <Formik
                    initialValues={
                        {
                            username: '',
                            password: '',
                        }
                    }
                    onSubmit={values => {
                        if (values.username === 'admin' && values.password === 'admin') {
                            alert('Welcome Admin Page!');
                            navigate('/admin');
                        } else {
                            axios.post("http://localhost:3000/user/login", values)
                                .then((res) => {
                                    alert('Login success');
                                    setCurrentUser(res.data);
                                    navigate('/user');
                                }).catch(e => {
                                    alert('Incorrect account or password')
                            })
                        }
                    }}
                >
                    <Form>
                        <div className="form-group">
                            <label htmlFor="usernamr">Username</label>
                            <Field id="username" name="username" className="input-field"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" type="password" className="input-field" />
                        </div>
                        <button className="btn btn-primary btn-lg btn-block">Login</button>
                    </Form>
                </Formik>
                <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
            </div>
        </>
    )
}