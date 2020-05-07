/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import { renderer } from '@bikeshaving/crank/dom';

function Title(): Element {
  console.log('inside title');
  return (<h1>Hello Another Crank!!!</h1>)
} 

export default Title;