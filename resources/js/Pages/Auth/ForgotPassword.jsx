import { useForm, Link } from "@inertiajs/react";
import React from "react";

export default function ForgotPassword(props) {
    const { data, setData, post, errors } = useForm({
        email: "harun.ossp@gmail.com",
    });

    const submitLogin = (e) => {
        e.preventDefault();
        post("/forgot-password");
    }
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" >
            <div className="card w-50 shadow p-4">
                <h3 className="text-success">Forgot Password </h3>
                <div className="card-body px-0">
                    <form onSubmit={submitLogin}>
                    {errors.email && <span className="text-success">{errors.email}</span>}
                    <div className="form-group mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" placeholder="Enter Email" value={data.email} onChange={e => setData('email',e.target.value)}/>
                    </div>
                    

                    <div className="form-group text-end">
                        <button type="submit" className="btn btn-success px-4">Submit</button>
                    </div>
                    </form>

                    <div>
                        <Link href="/login" className="black-color fs-18">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
