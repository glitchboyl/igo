function search(array, id) {
  if (!id) {
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].catalogId == id) {
      let ts = array[i];
      return {
        catalogId: ts.catalogId,
        nodeName: ts.nodeName,
        parent: search(array, ts.parentsId)
      }
    }
  }
}

function typeChange(array, pid) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].parentsId == pid) {
      let ts = array[i];
      arr.push({
        catalogId: ts.catalogId,
        nodeName: ts.nodeName,
        parentsId: ts.parentsId,
        parent: search(array, ts.parentsId),
        children: typeChange(array, ts.catalogId),
        isOpen: false
      })
    }
  }
  return arr;
}

export default typeChange
