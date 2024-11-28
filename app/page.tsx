import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <div className={styles.gridContainer}>
        <section
          className={`${styles.homeSection} ${styles.about}`}
          aria-labelledby="about-section"
        >
          <h2 id="about-section">About Us</h2>
          <p>
            We are committed to creating accessible, inclusive, and
            user-friendly web experiences for everyone. Our mission is to ensure
            all users, regardless of ability, can engage with and benefit from
            the web.
          </p>
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src="/images/computer.png"
              alt="A generic computer setup on a desk"
            />
            <figcaption className={styles.figcaption}>
              A generic computer setup illustrating modern technology.
            </figcaption>
          </figure>
        </section>

        <section
          className={`${styles.homeSection} ${styles.features}`}
          aria-labelledby="features-section"
        >
          <h2 id="features-section">Features</h2>
          <ul className={styles.featureList}>
            <li>Semantic HTML structure for better accessibility.</li>
            <li>Landmark elements to aid screen reader navigation.</li>
            <li>Keyboard navigable links and buttons.</li>
          </ul>
        </section>
      </div>

      <section
        className={`${styles.homeSection} ${styles.blog}`}
        aria-labelledby="blog-section"
      >
        <h2 id="blog-section">Latest Articles</h2>
        <article className={styles.article}>
          <header>
            <h3>
              <a href="/article-1">
                The Importance of Accessibility in Web Design
              </a>
            </h3>
            <p>
              Posted on <time dateTime="2024-11-28">28th November 2024</time>
            </p>
          </header>
          <p>
            Discover why accessibility matters and how you can make your
            websites more inclusive for all users. Read the full article to
            learn more.
          </p>
        </article>
        <article className={styles.article}>
          <header>
            <h3>
              <a href="/article-2">
                Top 10 Accessibility Practices for Developers
              </a>
            </h3>
            <p>
              Posted on <time dateTime="2024-11-20">20th November 2024</time>
            </p>
          </header>
          <p>
            Learn about the top 10 practices that developers can implement to
            improve accessibility on their projects.
          </p>
        </article>
      </section>
    </>
  );
}
