import list from "./list";
import add from "./add";
import addBasic from "./add/basic";
import addDesc from "./add/desc";
import addAlbum from "./add/album";
import sort from "./sort";
import sortAdd from "./sort/add";
import brand from "./brand";
import brandAdd from "./brand/add";
import extend from "./extend";

export default {
  list,
  add: {
    inner: add,
    basic: addBasic,
    desc: addDesc,
    album: addAlbum
  },
  sort: {
    inner: sort,
    add: sortAdd
  },
  brand: {
    inner: brand,
    add: brandAdd
  },
  extend
};
