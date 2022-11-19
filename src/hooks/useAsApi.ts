export function useAsApi() {
  const apiBase = 'https://front-test.dev.aviasales.ru/'

  async function getSearchId() {
    const res = await fetch(`${apiBase}/search`)
    if (!res.ok) {
      throw new Error('ошибка в получении данных')
    }
    return res.json()
  }

  return {
    getSearchId,
  }
}
