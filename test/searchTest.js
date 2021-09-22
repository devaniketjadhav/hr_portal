const assert = require('chai').assert;
const expect = require('chai').expect;

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe('Search Component Testing', () => {
    it('Renders Search component correctly', () => {
        act(() => {
            ReactDOM.render(<SearchBar/>, rootContainer);
        });
        const search = rootContainer.querySelector('.search');
        expect(search.textContent).to.isNotNull(search, 'Search DOM is not null');
    });
});