import request from "../utils/request";

const loginProvider = (payload) => {
let url = `/login?`;
  // if (payload.uname && payload.uname.length > 0) {
  //   url = url + "&username=" + payload.uname;
  // }
  // if (payload.password && payload.password.length > 0) {
  //   url = url + "&password=" + payload.pwd;
  // }
return request({
    url: url,
    method: "POST",
    body: "&username="+payload.uname+"&password="+ payload.pwd
  });
};

const MemberService = {
  loginProvider,
};

export default MemberService;
