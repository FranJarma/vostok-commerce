"use client"
import { useState, useEffect } from 'react'
export const useViewport = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
  }, []);

  return { width };
}