interface ErrorProps {
  msg: string;
}

const ErrorMsg = ({ msg }: ErrorProps) => {
  return <div className="text-danger">{msg}</div>;
};

export default ErrorMsg;
