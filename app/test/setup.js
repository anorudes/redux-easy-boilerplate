import React from 'react'; // eslint-disable-line no-unused-vars
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';
import { jsdom } from 'jsdom';

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

global.document = jsdom('');
global.window = document.defaultView;
global.navigator = { userAgent: 'browser' };

global.React = React;
global.expect = expect;
global.sinon = sinon;

global.fdescribe = (...args) => describe.only(...args);
global.fit = (...args) => it.only(...args);

window.matchMedia = window.matchMedia || function matchMedia() {
  return {
    matches: () => {},
    addListener: () => {},
    removeListener: () => {},
  };
};
