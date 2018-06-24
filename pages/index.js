import Page from "../layouts";
import Link from "next/link";
import Head from "next/head";

export default () => (
  <Page>
    <Head>
      <title>Cristian Leyes</title>
    </Head>

    <div className="home">
      <div className="main">
        <h1>Cristian Leyes</h1>
        <div className="momentum">
          <p>
            <span>Developer</span>
          </p>
        </div>
        <nav>
          <a target="_blank" href="https://twitter.com/cristiandley">
            Twitter
          </a>
          <a href="mailto:cristiandley@gmail.com">Email</a>
          <a href="https://github.com/cristiandley">Github</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      .main {
        flex: none;
        text-align: center;
      }
      h1 {
        font-size: 14px;
        font-weight: normal;
      }
      nav {
        margin-top: 12px;
      }
      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }
      .momentum {
        padding-top: 10px;
      }
      .momentum p {
        font-size: 14px;
        color: #6e6e6e;
      }
    `}</style>
  </Page>
);
