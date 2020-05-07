/** @jsx createElement */
import { createElement } from '@bikeshaving/crank';
import { renderer } from  '@bikeshaving/crank/dom';
import Title from './components/Title';

renderer.render(<Title/>, document.body);
