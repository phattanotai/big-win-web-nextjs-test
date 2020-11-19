import { useEffect, useState } from "react";
import LayoutHoc from "../components/Layout/LayoutHoc";
import fx from "../components/functions/useUser";
import memberService from "../services/member";
import Router, { useRouter } from "next/router";
export default function register() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerData, setRegisterData] = useState({
    _id: null,
    agent_code: "BWIN",
    mem_date_add: "",
    mem_username: "",
    mem_password: "",
    mem_name: "",
    mem_tel: "",
    mem_line: "",
    mem_balance: "0",
    last_login: "",
    register_type: "API",
    mem_status: "1",
    external_id: "",
  });
  const register = async () => {
    $("#addStaffForm").bootstrapValidator("destroy");
    if (validateData()) {
      const regiserResult = await memberService.createMember(registerData);
      if (regiserResult.data.status === 2000) {
        toastr.success("สมัครสมาชิกเรียบร้อย คุณสามารถเข้าสู้ระบบได้แล้ว");
        setRegisterSuccess(true);
        setRegisterData(regiserResult.data.data);
      } else {
        toastr.error(
          "สมัครสมาชิกไม่สำเร็จ กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง"
        );
      }
    }
  };

  const validateData = () => {
    const elementsName = {
      mem_name: {
        validators: {
          notEmpty: {
            message: "This field is required",
          },
        },
      },
      // mem_username: {
      //   validators: {
      //     notEmpty: {
      //       message: "This field is required",
      //     },
      //     regexp: {
      //       regexp: /^[0-9a-zA-Z\s]+$/,
      //       message: "fomart invaild a-z A-Z only",
      //     },
      //   },
      // }, 
      mem_tel: {
        validators: {
          notEmpty: {
            message: "This field is required",
          },
          stringLength: {
            max: 10,
            min: 10,
            message: "The Telephone must be  10 characters",
          },
          regexp: {
            regexp: /^[0-9]+$/,
            message: "fomart invaild number only",
          },
        },
      },
    };
    if (fx.validate("#registerForm", elementsName)) {
      return true;
    } else {
      return false;
    }
  };
  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <LayoutHoc>
      <div id="register">
        <div className="container">
          <form
            id="registerForm"
            style={{ display: registerSuccess ? "none" : "block" }}
          >
            <h4>สมัครสมาชิก</h4>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  ชื่อผู้ใช้: <span className="ast-required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_name"
                  placeholder="Enter name"
                  name="mem_name"
                  value={registerData.mem_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  เบอร์โทร: <span className="ast-required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_tel"
                  placeholder="Enter tel"
                  name="mem_tel"
                  value={registerData.mem_tel}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  ไอดีไลน์:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_line"
                  placeholder="Enter line ID"
                  name="mem_line"
                  value={registerData.mem_line}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={register}
                >
                  สมัครสมาชิก
                </button>
              </div>
            </div>
          </form>
          <form
            id="registerFormSuccess"
            style={{ display: registerSuccess ? "block" : "none" }}
          >
            <h4>ข้อมูลสมัครสมาชิก</h4>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  ชื่อผู้ใช้: 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_name"
                  placeholder="Enter name"
                  name="mem_name"
                  value={registerData.mem_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  ไอดีเข้าเล่น: 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_username"
                  placeholder="Enter username"
                  name="mem_username"
                  value={registerData.mem_username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="pwd">
                  รหัสผ่าน: 
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_password"
                  placeholder="Enter password"
                  name="mem_password"
                  value={registerData.mem_password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  เบอร์โทร:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_tel"
                  placeholder="Enter tel"
                  name="mem_tel"
                  value={registerData.mem_tel}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  ไอดีไลน์:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mem_line"
                  placeholder="Enter line ID"
                  name="mem_line"
                  value={registerData.mem_line}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 form-group">
                <label className="control-label" htmlFor="email">
                  เพื่อความปลอดภัย ให้เก็บข้อมูลที่ได้รับไว้เป็บความลับ
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                >
                  สมัครสมาชิก
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutHoc>
  );
}
