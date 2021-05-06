export function fetchReducer(state, action) {
  const { type, result } = action;

  switch (type) {
    case 'FETCH_INIT':
      return {
        code: null,
        title: null,
        message: null,
        isLoading: true,
      };

    case 'POST_SUCCESS':
      return {
        ...state,
        code: result.status,
        title: 'Success',
        message: 'Ok',
        data: result.data,
        isLoading: false,
        isError: false,
      };

    case 'POST_ERROR':
      return {
        ...state,
        code: result.code,
        title: result.title,
        message: result.message,
        isLoading: false,
        isError: true,
      };

    case 'FETCH_FAILURE':
      return {
        ...state,
        code: result.statusCode,
        title: result.error,
        message: result.message,
        data: result.data,
        isLoading: false,
        isError: true,
      };

    case 'NETWORK_FAILURE':
      return {
        ...state,
        code: 500,
        title: 'Network Error',
        message: 'It seems you have a problem on your internet',
        isLoading: false,
        isError: true,
      };

    case 'UNAUTHORIZED':
      return {
        ...state,
        code: 401,
        title: 'Unauthorized',
        message: 'Pleaes login',
        isLoading: false,
        isError: true,
      };

    default:
      console.log('ACTION', action);
      throw new Error();
  }
}
