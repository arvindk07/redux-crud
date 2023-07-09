import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJECT,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import { toast } from "react-toastify";

export const makeRequset = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failRequset = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};

export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

export const getUseObj = (data) => {
  return {
    type: GET_USER_OBJECT,
    payload: data,
  };
};

export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequset);
    // setTimeout(() => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserList(userlist));
      })
      .catch((err) => {
        dispatch(failRequset(err.message));
      });
    // }, 2000);
  };
};

export const RemoveUser = (code) => {
  return (dispatch) => {
    dispatch(makeRequset());
    axios
      .delete("http://localhost:8000/user/" + code)
      .then((res) => {
        dispatch(deleteUser());
      })
      .catch((err) => {
        dispatch(failRequset(err.message));
      });
  };
};

export const FunctionAddUser = (data) => {
  return (dispatch) => {
    dispatch(makeRequset());
    axios
      .post("http://localhost:8000/user/", data)
      .then((res) => {
        dispatch(addUser());
        toast.success("User Added Successfully");
      })
      .catch((err) => {
        dispatch(failRequset(err.message));
      });
  };
};

export const FunctionUpdateUser = (data, code) => {
  return (dispatch) => {
    dispatch(makeRequset());
    axios
      .put("http://localhost:8000/user/" + code, data)
      .then((res) => {
        dispatch(updateUser());
        toast.success("User Update Successfully");
      })
      .catch((err) => {
        dispatch(failRequset(err.message));
      });
  };
};

export const FetchUserObj = (code) => {
  return (dispatch) => {
    dispatch(makeRequset);
    // setTimeout(() => {
    axios
      .get("http://localhost:8000/user/" + code)
      .then((res) => {
        const userlist = res.data;
        dispatch(getUseObj(userlist));
      })
      .catch((err) => {
        dispatch(failRequset(err.message));
      });
    // }, 2000);
  };
};
