// Core
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Engine
import { isDonateModalOpenSelector } from '../../../engine/core/donate/selectors';
import { actions } from '../../../engine/core/donate/actions';

export function useModal() {
  const isOpen = useSelector(isDonateModalOpenSelector);
  const dispatch = useDispatch();

  const setIsOpen = useCallback((isOpen) => {
    dispatch(actions.setIsModalOpen(isOpen));
  }, [dispatch]);

  return useMemo(() => [isOpen, setIsOpen], [isOpen, setIsOpen]);
}
