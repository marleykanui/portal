import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
const UTPortal = () => {
  return (
    <div>
      <Head>
        <title>UT Portal</title>
        <link rel="icon" href="/ut-logo.png" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <a className="navbar-brand" href="#">
          <Image src="/texas.png" alt="UT" width={170} height={60} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Courses
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My Bookmarks
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#"></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div classNameName="routecontainer">
        <h4 classNameName="direct">UT DIRECT </h4>
        <div classNameName="arrows">{">>"}</div>
        <h4 classNameName="academics">ACADEMICS </h4>
        <div classNameName="arrows">{">>"}</div>
        <h4 classNameName="listing">className LISTING </h4>
        <div classNameName="arrows">{">>"}</div>
      </div>
      <h3 classNameName="className2021">className Listing Spring 2021</h3>
      <div classNameName={styles.container}>
        <h6 classNameName="aboveimage">className Listing For: Marley Kanui</h6>
        <Image
          classNameName="scheduleimage"
          src="/course-work.png"
          alt="Course Work"
          width={750}
          height={250}
        />
        <h6>You are registered for 3 classNamees for 9 hours.</h6>
        <button classNameName="textbookbutton">
          <div classNameName="btnwrap">
            <div classNameName="greenarrow">{">"}</div>
            <div classNameName="btntextwrap">
              <div>Look Up Textbooks & </div> <div>Compare Prices</div>
            </div>
          </div>
        </button>
      </div>
      <div classNameName="semesterpicker">
        <div classNameName="semcontainer">
          <div>
            <h6>Choose Semester:</h6>
          </div>
          <div classNameName="selandbtn">
            <div classNameName="options">
              <select>
                <option value="0">Spring</option>
                <option value="1">Summer</option>
                <option value="2">Fall</option>
                <option value="3">Winter</option>
              </select>
            </div>
            <div classNameName="classNamebtn">
              <button>Get className Listing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UTPortal;
