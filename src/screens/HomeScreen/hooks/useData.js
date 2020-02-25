// Core
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isImmutable } from 'immutable';
// Engine
import { asyncActions } from '../../../engine/core/home/saga/asyncActions';
import { mainPostDataSelector, mainPostPendingSelector } from '../../../engine/core/home/selectors';

export function useData() {
  const data = useSelector(mainPostDataSelector);
  const isLoading = useSelector(mainPostPendingSelector);
  const dispatch = useDispatch();

  const getData = useCallback(() => {
    dispatch(asyncActions.getMainPostAsync());
  }, [dispatch]);

  return useMemo(() => {
    return {
      getData,
      isLoading,
      data: isImmutable(data) ? data.toJS() : data,
    };
  }, [data, getData, isLoading]);
}
