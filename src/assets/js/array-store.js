import storage from 'good-storage'

export function save(item, key, compare, maxLen) {
  const items = storage.get(key, [])

  insertArray(items, item, compare, maxLen)
  storage.set(key, items)
  return items
}

export function remove(key, compare) {
  const items = storage.get(key, [])

  deleteFromArray(items, compare)
  storage.set(key, items)
  return items
}

export function load(key) {
  return storage.get(key, [])
}

function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    return
  }
  arr.unshift(val)
  if (maxLen && maxLen < arr.length) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index < 0) {
    return
  }
  arr.splice(index, 1)
}
