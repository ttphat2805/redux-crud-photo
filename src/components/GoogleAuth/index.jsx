import { gapi } from "gapi-script";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { signIn, signOut } from "../../features/GoogleSlice";
import "./index.scss";
const clientId =
  "619904791628-8t4klsso02bp2ku1f2fhnbh4aiqoac98.apps.googleusercontent.com";

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  console.log(isSignedIn);
  const InfoUser = useSelector((state) => state.auth.infoUser);
  const handleSuccess = (res) => {
    localStorage.setItem("x-token", res.accessToken);
    const infoUser = {
      fullname: res.profileObj.name,
      email: res.profileObj.email,
    };
    toast.success("Login Google Successfully");

    dispatch(signIn(infoUser));
  };

  const handleFailed = (res) => {
    alert("Đăng nhập thất bại");
  };

  const handleLogout = (res) => {
    toast.success("LogOut Google Successfully");
    localStorage.removeItem("x-token");
    dispatch(signOut());
    window.location.reload();
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      <div className="googleAuth">
        {isSignedIn ? (
          <div className="info_users">
            <ul className="user">
              <li>Name: {InfoUser.fullname}</li>
              <li>Email: {InfoUser.email}</li>
            </ul>
            <GoogleLogout
              clientId={clientId}
              className="red"
              buttonText="Thoát"
              onLogoutSuccess={handleLogout}
            />
          </div>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Đăng nhập"
            onSuccess={handleSuccess}
            onFailure={handleFailed}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    </div>
  );
};

export default GoogleAuth;
