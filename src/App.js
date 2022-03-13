import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';

import styles from './App.module.scss'

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route
          path='/'
          element=
          {<Suspense fallback={<Loading />}>
            <div className={styles.bg_page}>
              <Home />
            </div>
          </Suspense>}>
        </Route>

        <Route
          path='/progetti'
          element=
          {<Suspense fallback={<Loading />}>
            <div className={styles.bg_page}>
              <Projects />
            </div>
          </Suspense>}>
        </Route>

      </Routes>

      <Footer />



    </>

  );
}

export default App;
