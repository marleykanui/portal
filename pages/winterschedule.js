import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
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
          data-bs-target="#k"
          aria-controls="k"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="k">
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
      <div className="routecontainer">
        <h4 className="direct">UT DIRECT </h4>
        <div className="arrows">{">>"}</div>
        <h4 className="academics">ACADEMICS </h4>
        <div className="arrows">{">>"}</div>
        <h4 className="listing">CLASS LISTING </h4>
        <div className="arrows">{">>"}</div>
      </div>
      <h3 className="class2021">Class Listing Winter 2021</h3>
      <div className={styles.container}>
        <h6 className="aboveimage">Class Listing For: Ezgi Koca</h6>
        <h6 className="noclasses">
          You Have No Classes Scheduled for Winter of 2021
        </h6>
        <Link href="https://www.universitycoop.com/adoption-search">
          <a>
            <button className="textbookbutton">
              <div className="btnwrap">
                <div className="greenarrow">{">"}</div>
                <div className="btntextwrap">
                  <div>Look Up Textbooks & </div> <div>Compare Prices</div>
                </div>
              </div>
            </button>
          </a>
        </Link>
      </div>
      <div className="semesterpicker">
        <div className="semcontainer">
          <div>
            <h6>Choose Semester:</h6>
          </div>
          <div className="selandbtn">
            <div className="options">
              <select>
                <option value="0">Spring</option>
                <option value="1">Summer</option>
                <option value="2">Fall</option>
                <option value="3">Winter</option>
              </select>
            </div>
            <div className="classbtn">
              <Link href="/ezgikoca/utdirect/academics/classlisting/09673yhsf5spring">
                <a>
                  <button>Get Class Listing</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UTPortal;
