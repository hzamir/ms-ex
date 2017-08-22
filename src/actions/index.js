import * as acctTypes from '../constants/AcctActionTypes'


// all this boilerplate is pretty silly and should be generated, I've got other stuff to do now, however
export const loadMore      = () => ({type: acctTypes.LOAD_MORE});
export const toggleAvail   = () => ({type: acctTypes.SORT_TOGGLE_AVAIL});
export const toggleAcctNo  = () => ({type: acctTypes.SORT_TOGGLE_ACCTNO});
export const sortByAcctNo  = () => ({type: acctTypes.SORT_BY_ACCTNO});
export const sortByAvail  = () => ({type: acctTypes.SORT_BY_AVAIL});
