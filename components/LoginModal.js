import memberService from '../services/member';
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import fx from '../components/functions/useUser';
export default function LoginModal() {
  const [auth,setAuth] = useState({username: '', password: ''});
  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setAuth((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const loginMember = async () =>{
    const login1 = await memberService.memberLogin(auth);
    if(login1.data.status === 2003){
      Swal.fire({
        title: login1.data.message,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `yes`,
        denyButtonText: `no`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const login2 = await memberService.memberLogin2(auth);
          if(login2.data.status === 2000){
            Cookies.set('member',fx.encode(login2.data.data));
            setTimeout(() => {
              location.replace('/home');
            }, 500);
            toastr.success('Login ' + login2.data.message);
          }
        } 
      })
    }else{
      Cookies.set('member',fx.encode(login1.data.data));
      setTimeout(() => {
        location.replace('/home');
      }, 500);
      toastr.success('Login ' + login1.data.message);
    }
  }
  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ textAlign: "center" }}>
              <h5 className="modal-title" >
                เข้าสู่ระบบ
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form >
                <div className="form-group">
                  <label htmlFor="email">Username:</label>
                  <input
                    type="test"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    name="username"
                    value={auth.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    value={auth.password}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="form-group form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                </div> */}
                <button type="button" className="btn btn-primary btn-block" onClick={loginMember}>
                    เข้าสู่ระบบ
                </button>
                {/* <a>ลืมรหัสผ่าน?</a> */}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
