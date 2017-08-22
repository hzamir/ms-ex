
import {
  SORT_TOGGLE_AVAIL, SORT_TOGGLE_ACCTNO, LOAD_MORE, SORT_BY_AVAIL,
  SORT_BY_ACCTNO
} from '../constants/AcctActionTypes'
import { kAcctNum, kCashAvail, asc, desc} from '../constants/AcctFields'



function toggledOrder(x) { return x === desc?asc:desc;}

function sortedByForward(src, prop)
{
  return Array.from(src).sort((a,b) =>
    {
      const  av = a[prop], bv = b[prop];
      return av < bv? -1: (av > bv? 1 : 0);
    }
  );
}

function sortedByReverse(src, prop)
{
  return Array.from(src).sort((a,b) =>
    {
      const  av = a[prop], bv = b[prop];
      return av < bv? 1: (av > bv? -1: 0);
    }
  );
}

function sortedBy(src,prop,direction)
{
  return direction === 'desc'? sortedByReverse(src,prop): sortedByForward(src,prop);
}


// note that constants are used to name a couple of fields, since these properties will be identified with constants
// elsewhere for sorting purposes, so there is only one version of the actual field name

const initialAccounts =
  [
    {acctType: 'AAA', [kAcctNum]: 1812, [kCashAvail]:  2010926.10, changePct: 0.21, totValue:  38881.63}
    ,{acctType: 'AAA', [kAcctNum]: 3810, [kCashAvail]: 10050054.07, changePct: 0.07, totValue:   8916.69}
    ,{acctType: 'IRA', [kAcctNum]: 5200, [kCashAvail]:     5763.36, changePct:-0.08, totValue:   8916.69}
    ,{acctType: 'AAA', [kAcctNum]:  29,  [kCashAvail]: 39160334.42, changePct:-0.07, totValue:  31435.87}
    ,{acctType: 'IRA', [kAcctNum]:  146, [kCashAvail]: 15884302.39, changePct: 0.03, totValue:   7430.83}
    ,{acctType: 'REG', [kAcctNum]: 2019, [kCashAvail]: 13465679.34, changePct: 0.00, totValue:      0.00}
  ];


const initialState =
  {
    // reusing property names for sort orders, and identifying the current sorting field
    sorting: { by: kCashAvail,  [kAcctNum]: asc, [kCashAvail]: asc}
    ,limited: true // show only three records initially
    ,accounts: initialAccounts
  };


function sort(state, prop)
{
  return {
    ...state,
    sorting : {...state.sorting, by: prop},  // only the current sorting property changes
    accounts: sortedBy(state.accounts, prop, state.sorting[prop])  // reorder the accounts
  };
}

function sortToggle(state, prop)
{
  const order    = toggledOrder(state.sorting[prop]);            // get the toggled sort order for whatever property
  const sorting  = {...state.sorting, by: prop, [prop]:order};   // get the new sorting state
  const accounts = sortedBy(state.accounts, prop, order);        // the new ordering of the accounts
  const limited = state.limited;
  return {
    sorting : sorting,
    limited: limited,
    accounts: accounts
  };

}

export default function msexstate(state = initialState, action) {
  switch (action.type) {
    case SORT_BY_AVAIL:      return sort(state, kCashAvail);
    case SORT_BY_ACCTNO:     return sort(state, kAcctNum);
    case SORT_TOGGLE_AVAIL:  return sortToggle(state, kCashAvail);
    case SORT_TOGGLE_ACCTNO: return sortToggle(state, kAcctNum);
    case LOAD_MORE:          return {...state, limited:false};
    default:                 return state;
  }
}
