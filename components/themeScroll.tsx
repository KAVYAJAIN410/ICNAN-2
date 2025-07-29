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
    <div className="">
      <center>
        <h3
          className="text-4xl font-semibold mb-4"
          style={{ fontFamily: 'Gill Sans Ultra Bold, sans-serif' }}
        >
          Themes
        </h3>
      </center>

    <div className="flex justify-center" ref={containerRef}>
  <div className="border rounded-xl bg-white shadow h-64 relative overflow-hidden group">


<ul className={`p-2 text-xs md:text-sm text-gray-700 ${startScroll ? 'animate-verticalScroll' : ''} group-hover:[animation-play-state:paused]`}>
  {paddedThemes.map((theme, index) => {
    const isTheme = theme !== '';
    const serial = isTheme ? (themeCount % themes.length) + 1 : '';

    if (isTheme) themeCount++;

    return (
      <li key={index} className="text-xl h-[2.5rem]">
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
