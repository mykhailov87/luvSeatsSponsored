// Core
import { useCallback, useMemo } from 'react';

export function useData() {
  const data = [
    {
      id: '1',
      title: 'Make-A-Wish Foundation of America',
    },
    {
      id: '2',
      title: 'Shriners Hospitals for Children',
    },
    {
      id: '3',
      title: 'Habitat for Humanity',
    },
    {
      id: '4',
      title: 'Salvation Army',
    },
    {
      id: '5',
      title: 'Goodwill Industries International',
    },
    {
      id: '6',
      title: 'American Cancer Society ',
    },
    {
      id: '7',
      title: 'American National Red Cross',
    },
    {
      id: '8',
      title: 'Meals on Wheels',
    },
    {
      id: '9',
      title: 'Entertainment Industry Foundation',
    },
    {
      id: '10',
      title: 'Wounded Warriors Project',
    },
    {
      id: '11',
      title: 'American SPCA',
    },
  ];

  const getData = useCallback(() => {
    // TODO: redux-action must be here
  }, []);

  return useMemo(() => ({ data, getData }), [data, getData]);
}
