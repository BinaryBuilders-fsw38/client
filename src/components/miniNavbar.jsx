import "../css/index.css";

const MiniNavbar = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-8 mt-16">
        <ul className="flex list-none p-0 w-96">
          <li className="flex items-center pr-2">
            <a href="#">
              <p className="MuiTypography-root jss51 jss52 jss67 jss70 jss45 jss63 MuiTypography-body1 MuiTypography-alignLeft">
                Home
              </p>{" "}
            </a>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="16"
              height="16"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
            <a href="#">
              <p className="MuiTypography-root jss51 jss52 jss67 jss70 jss45 jss63 MuiTypography-body1 MuiTypography-alignLeft">
                Product
              </p>{" "}
            </a>
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="16"
              height="16"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
            <a href="#">
              <p className="MuiTypography-root jss51 jss52 jss67 jss70 jss45 jss63 MuiTypography-body1 MuiTypography-alignLeft">
                New Arrivals
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MiniNavbar;

//mini -> Mini