import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/app.scss';
// import Loading from '../components/Loading';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(prefersDarkMode);

    const darkModeListener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', darkModeListener);

    return () => {
      darkModeQuery.removeEventListener('change', darkModeListener);
    };
  }, []);

  useEffect(() => {

    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState<string>('white');
  const [cursorSize, setCursorSize] = useState<number>(1);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setCursorColor('black');
      setCursorSize(1.5);
    };

    const onMouseUp = () => {
      setCursorColor('white');
      setCursorSize(1);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      {/* <Loading />  */}
      <div className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </div>
      <Component {...pageProps} isDarkMode={isDarkMode} />
      <div
        className="circle-cursor"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          backgroundColor: cursorColor,
          transform: `scale(${cursorSize})`,
        }}
      ></div>
    </>
  );
}

export default MyApp;