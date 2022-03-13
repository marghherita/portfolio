import styles from './Home.module.scss'

const Home = () => {
  return (
      <body>
          
    <div className={styles.home_container}>
      <section>
        <h1>Page One</h1>
      </section>
      <section>
        <h1>Page Two</h1>
      </section>
      <section>
        <h1>Page Three</h1>
      </section>
    </div>
      </body>
  );
};

export default Home;
