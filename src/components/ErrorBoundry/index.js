import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {text} from 'native-base'
import ErrorScreen from "../../screens/ErrorScreen";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;