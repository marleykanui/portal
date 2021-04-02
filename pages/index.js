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
      <Image
        src="/course-work.png"
        alt="COurse Work"
        width={750}
        height={250}
      />
    </div>
  );
};

export default UTPortal;
