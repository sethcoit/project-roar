import { useState, useEffect } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'legal'; section: string }
  | { name: 'case-studies' };

function parseHash(): Route {
  const hash = window.location.hash;
  const legalMatch = hash.match(/^#\/legal\/([a-z]+)$/);
  if (legalMatch) {
    return { name: 'legal', section: legalMatch[1] };
  }
  if (hash === '#/case-studies' || hash === '#/cases') {
    return { name: 'case-studies' };
  }
  return { name: 'home' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { name: 'home' }
  );

  useEffect(() => {
    const onHashChange = () => {
      const newRoute = parseHash();
      setRoute((prev) => {
        if (prev.name === newRoute.name) return prev;
        window.scrollTo(0, 0);
        return newRoute;
      });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
