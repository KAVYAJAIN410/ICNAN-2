'use client';
import { useEffect, useRef, useState } from 'react';

interface ThemeScrollerProps {
  themes: string[];
}

let themeCount = 0;

export default function ThemeScroller({ themes }: ThemeScrollerProps) {
  const [startScroll, setStartScroll] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStartScroll(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const paddedThemes = [
    '', '', // top padding
    ...themes,
    '', '', // bottom padding (adds scroll space)
    ...themes, // second full scroll
    '', '', // another bottom padding
  ];

  return (
    <div className="w-screen px-4 md:px-8">
      <center>
        <h3
          className="text-2xl md:text-4xl font-semibold mb-4"
          style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}
        >
          Themes
        </h3>
      </center>

      <div className="flex justify-center mr-6" ref={containerRef}>
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl border rounded-xl bg-white shadow h-64 relative overflow-hidden group">
          <ul
            className={`p-2 md:p-4 text-xs md:text-base text-gray-700 leading-[2.5rem] ${startScroll ? 'animate-verticalScroll' : ''} group-hover:[animation-play-state:paused]`}
          >
            {paddedThemes.map((theme, index) => {
              const isTheme = theme !== '';
              const serial = isTheme ? (themeCount % themes.length) + 1 : '';

              if (isTheme) themeCount++;

              return (
                <li key={index} className="text-xl truncate">
                  {isTheme && `${serial}. ${theme}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
