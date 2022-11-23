// const apiBase = 'https://front-test.dev.aviasales.ru'
// const altApiBase = 'https://aviasales-test-api.kata.academy'
//
// export function useAsApi(base = apiBase) {
//   async function apiGetSearchId(): Promise<any> {
//     try {
//       const res = await fetch(`${base}/search`)
//       return await res.json()
//     } catch (e) {
//       return useAsApi(altApiBase).apiGetSearchId()
//     }
//   }
//   async function apiGetTickets(id: string): Promise<any> {
//     try {
//       const res = await fetch(`${base}/tickets?searchId=${id}`)
//       return await res.json()
//     } catch (e) {
//       return useAsApi(altApiBase).apiGetTickets(id)
//     }
//   }
//
//   return {
//     apiGetSearchId,
//     apiGetTickets,
//   }
// }

//  сверху альтернативный вариант - сначала запрос на апи авиасейлс, а при ошибке - на сторонний

export function useAsApi() {
  const apiBase = 'https://aviasales-test-api.kata.academy'
  async function apiGetSearchId() {
    try {
      const res = await fetch(`${apiBase}/search`)
      return await res.json()
    } catch (e) {
      console.log(e)
    }
  }
  async function apiGetTickets(id: string) {
    try {
      const res = await fetch(`${apiBase}/tickets?searchId=${id}`)
      return await res.json()
    } catch (e) {
      console.log(e)
    }
  }

  return {
    apiGetSearchId,
    apiGetTickets,
  }
}
