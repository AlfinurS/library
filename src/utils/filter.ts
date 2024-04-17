import type { paginationType } from "@/types/common"

export function filterByPagination (data: any[], params: paginationType): any[] {
  const keys = Object.keys(data);
  const firstIndex = params.page * params.page_size - params.page_size;
  let lastIndex = params.page * params.page_size;
  if (lastIndex > keys.length) {
    lastIndex = keys.length;
  }
  const keysOnPage = keys.slice(firstIndex, lastIndex);
  const result = keysOnPage.map(key => data[key]);
  return result;
}

export function filterByPaginationArray (data: any[], params: paginationType): any[] {
  const firstIndex = params.page * params.page_size - params.page_size;
  let lastIndex = params.page * params.page_size;
  if (lastIndex > params.count) {
    lastIndex = params.count;
  }
  return data.slice(firstIndex, lastIndex);
}