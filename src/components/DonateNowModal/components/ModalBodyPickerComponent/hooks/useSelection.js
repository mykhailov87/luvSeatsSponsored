// Core
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Engine
import { donateModalSelectionSelector } from '../../../../../engine/core/donate/selectors';
import { actions } from '../../../../../engine/core/donate/actions';

export function useSelection() {
  const selection = useSelector(donateModalSelectionSelector);
  const dispatch = useDispatch();

  const setSelection = useCallback((selection) => {
    dispatch(actions.setSelection(selection));
  }, [dispatch]);

  return useMemo(() => [selection, setSelection], [selection, setSelection]);
}
