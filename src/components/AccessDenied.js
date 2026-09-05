import { Result } from "antd";

function AccessDenied() {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
        />
    );
}

export default AccessDenied;
