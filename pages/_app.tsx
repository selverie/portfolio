import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/app.scss';

interface MyAppProps {
  Component: React.ElementType;
  pageProps: any; 
}

function MyApp({ Component, pageProps }: MyAppProps) {
  // Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // Check for user preference (light/dark mode)
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme based on user preference
    setIsDarkMode(prefersDarkMode);

    // Listen for changes in user preference
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
    // Set the theme based on the state
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  // Cursor
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
      <div className="theme-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </div>
      <Component {...pageProps} />
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
