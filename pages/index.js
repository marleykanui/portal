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

      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <a class="navbar-brand" href="#">
          <Image src="/texas.png" alt="UT" width={170} height={60} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
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
      <h3 className="class2021">Class Listing Spring 2021</h3>
      <div className={styles.container}>
        <h6 className="aboveimage">Class Listing For: Marley Kanui</h6>
        <Image
          className="scheduleimage"
          src="/course-work.png"
          alt="Course Work"
          width={750}
          height={250}
        />
        <h6>You are registered for 3 classes for 9 hours.</h6>
        <button className="textbookbutton">
          <div className="btnwrap">
            <div className="greenarrow">{">"}</div>
            <div className="btntextwrap">
              <div>Look Up Textbooks & </div> <div>Compare Prices</div>
            </div>
          </div>
        </button>
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
              <button>Get Class Listing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UTPortal;
