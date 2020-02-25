export function actionCreator(actionType, actionPayload) {
  return {
    payload: actionPayload,
    type: actionType,
  };
}
