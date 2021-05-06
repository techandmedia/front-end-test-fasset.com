export function userReducer(state, action) {
  const { type, value } = action;

  switch (type) {
    case 'init':
      console.log(value);
      return {
        ...state,
        ...value,
        GET_COIN_LIST_API: 'coins/list',
        GET_TOP_50_COIN_LIST_API: 'coins/markets',
        GET_TOP_50_COIN_LIST_API_TEMP:
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true',
        GET_TOP_50_COIN_PARAMS: {
          page: 1,
          per_page: 50,
          sparkline: true,
          vs_currency: 'usd',
          order: 'market_cap_desc',
        },
      };

    case 'update-coin':
      return {
        ...state,
        coin: value.coin_name,
      };

    case 'reset-coin':
      return {
        ...state,
        coin: null,
      };

    case 'login':
      console.log(value);
      return {
        ...state,
      };

    case 'logout':
      console.log(value);
      return {
        ...state,
      };

    default:
      console.log('ACTION', action);
      throw new Error();
  }
}
