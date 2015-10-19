import R from 'ramda';
import Promise from 'bluebird';

export default function resolveLoadActions(dispatch, actionFilter, components, params, search) {
  return Promise.all(R.pipe(
    R.filter((component) => component.loadAction),
    R.map((component) => components.loadAction),
    R.filter(actionFilter)
  )(components));
}
