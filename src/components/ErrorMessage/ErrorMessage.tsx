import React from "react";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <div>{error}</div>;
};

export default ErrorMessage;
