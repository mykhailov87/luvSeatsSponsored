// Core
import { useCallback, useMemo } from 'react';

export function useData() {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Raiders Foundation',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Golden Knights Foundation',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Howard Hughes Foundation',
    },
  ];

  const getData = useCallback(() => {
    // TODO: redux-action must be here
  }, []);

  return useMemo(() => ({ data, getData }), [data, getData]);
}
