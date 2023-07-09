import { useEffect } from "react";
import { connect } from "react-redux";
import { FetchUserList, RemoveUser } from "../Redux/Action";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);

  const handleDelete = (code) => {
    if (window.confirm("Do you want to remove? ")) {
      props.removeuser(code);
      props.loaduser();
      toast.success("User Removed Successfully");
    }
  };

  return props.user.loading ? (
    <div>
      <h2>Loading....</h2>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h2>{props.user.errmessage}</h2>
    </div>
  ) : (
    <div className="container py-5">
      <div className="card">
        <div className="card-header ">
          <Link to={"/user/add"} className="btn btn-success">
            Add User [+]
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr className="bg-dark text-white">
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.user.userlist &&
                props.user.userlist.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link
                        to={"/user/edit/" + item.id}
                        className="btn btn-primary mx-1"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="btn btn-danger mx-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code) => dispatch(RemoveUser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
