import { Link } from 'react-router-dom';
import Styles from "./ErrorPage.module.css"

const ErrorPage = () => {
  return (
    <div className={Styles.errorPage}>
      <h2 className={Styles.errorHeading}>404 Page Not Found</h2>
      <p className={Styles.errorMessage}>The requested page could not be found.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;