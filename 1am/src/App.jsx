import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bot from './components/Bot';
import CodeEditor from './codeEditor/codeEditor';
import Home from './components/Home';
import Loader from './components/Loader';

const App = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {

    const showLoader = () => {
      try {
        setLoader(true);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoader(false);
        }, 3500);
      }
    }
    showLoader()
  }, [])
  return (
    <Router>
      <Routes>
        {/* Define route for Bot */}
        <Route path="/" element={

          loader ? (
            <Loader />
          ) : (

            <><Home /> <Bot /></>
          )
        } />

        {/* Define route for CodeEditor (second app) */}
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
};

export default App;