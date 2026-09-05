import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import { useContext } from "react";

import Login from "./components/Login";
import Student from "./components/Student";
import Teacher from "./components/Teacher";
import Principal from "./components/Principal";
import AccessDenied from "./components/AccessDenied";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";

const { Header, Content } = Layout;

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Layout>
        {user && (
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item><Link to="/student">Student</Link></Menu.Item>
              <Menu.Item><Link to="/teacher">Teacher</Link></Menu.Item>
              <Menu.Item><Link to="/principal">Principal</Link></Menu.Item>
              <Menu.Item style={{ float: "right" }}>
                <Button onClick={logout}>Logout</Button>
              </Menu.Item>
            </Menu>
          </Header>
        )}

        <Content style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/denied" element={<AccessDenied />} />

            <Route
              path="/student"
              element={
                <ProtectedRoute allowedRoles={["student", "teacher", "principal"]}>
                  <Student />
                </ProtectedRoute>
              }
            />

            <Route
              path="/teacher"
              element={
                <ProtectedRoute allowedRoles={["teacher", "principal"]}>
                  <Teacher />
                </ProtectedRoute>
              }
            />

            <Route
              path="/principal"
              element={
                <ProtectedRoute allowedRoles={["principal"]}>
                  <Principal />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
