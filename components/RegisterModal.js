export default function RegisterModal() {
  return (
    <>
      <div
        className="modal fade"
        id="registerModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ textAlign: "center" }}>
              <h5 className="modal-title" id="exampleModalLabel">
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
              <form action="/action_page.php">
                <div className="form-group">
                  <label htmlFor="email">Username:</label>
                  <input
                    type="test"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    name="username"
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
                  />
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                    />{" "}
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                <a>ลืมรหัสผ่าน?</a>
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
