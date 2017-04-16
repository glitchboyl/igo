import inner from './inner'
import add from './add'
import all from './all'
import sale from './sale'
import commodityDetails from './commodity-details'
import sort from './sort'
import appraise from './appraise'
import appraiseDetails from './appraise-details'
import recycle from './recycle'

export default {
  inner,
  add,
  all: {
    inner: all,
    details: commodityDetails
  },
  sale: {
    inner: sale,
    details: commodityDetails
  },
  sort,
  appraise: {
    inner: appraise,
    details: appraiseDetails
  },
  recycle
}
