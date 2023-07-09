import { useState } from "react";
import { useDispatch } from "react-redux";
import { FunctionAddUser } from "../Redux/Action";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [role, roleChange] = useState("Staff");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = { name, email, phone, role };
    dispatch(FunctionAddUser(userobj));
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <div className="container">
              <h2>Add User</h2>
            </div>
          </div>
          <div className="card-body d-flex justify-content-center py-5">
            <div className="row container">
              <div className="col-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    value={name}
                    onChange={(e) => nameChange(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => emailChange(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    value={phone}
                    onChange={(e) => phoneChange(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label>Role</label>
                  <select
                    className="form-control"
                    value={role}
                    onChange={(e) => roleChange(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="container">
              <button className="btn btn-primary mx-3" type="submit">
                Submit
              </button>
              <Link to={"/user"} className="btn btn-danger mx-3">
                Back
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
