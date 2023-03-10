import { notFoundStyles } from "../assets/styles/not-found.css";

const NotFound = () => {
  return (
    <div className={notFoundStyles}>
      <div>Page Not Found. Please check your url</div>
    </div>
  );
};

export default NotFound;
