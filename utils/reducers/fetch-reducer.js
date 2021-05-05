export function fetchReducer(state, action) {
  const { type, result } = action;

  switch (type) {
    case "FETCH_INIT":
      return {
        code: null,
        title: null,
        message: null,
        isLoading: true,
      };

    case "POST_SUCCESS":
      const { code, title, message, pagination } = result;
      /**
       * Supaya nomor urut bertambah pada saat pindah halaman,
       * tanpa ini, maka setiap halaman memiliki nomor urut yang sama: 1-10
       */
      const numberAddition =
        result.pagination && result.pagination.page
          ? result.pagination.page * 10 - 10
          : 0;

      /**
       * Menambahkan nomor urut
       */
      const data =
        result.data && Array.isArray(result.data)
          ? result.data.map((data, index) => {
              const key = { key: index + 1 + numberAddition };
              return { ...key, ...data };
            })
          : result.data;
      return {
        ...state,
        code,
        title,
        message,
        data,
        pagination,
        isLoading: false,
        isError: false,
      };

    case "POST_ERROR":
      return {
        ...state,
        code: result.code,
        title: result.title,
        message: result.message,
        isLoading: false,
        isError: true,
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        code: result.statusCode,
        title: result.error,
        message: result.message,
        data: result.data,
        isLoading: false,
        isError: true,
      };

    case "NETWORK_FAILURE":
      return {
        ...state,
        code: 500,
        title: "Network Error",
        message: "It seems you have a problem on your internet",
        isLoading: false,
        isError: true,
      };

    case "UNAUTHORIZED":
      return {
        ...state,
        code: 401,
        title: "Unauthorized",
        message: "Pleaes login",
        isLoading: false,
        isError: true,
      };

    default:
      console.log("ACTION", action);
      throw new Error();
  }
}
