import "./LoadingSpinner.scss";

import loaderLogo from "../../assets/icons/loader.svg";

export const LoadingSpinner = () => {
  return (
    <main className="loader">
      <img
        src={loadingLogo}
        alt="Loading Spinner Logo"
        className="loader__logo"
      />
      <p className="loader__text">Loading...</p>
    </main>
  );
};
