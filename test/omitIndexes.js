import RA from '../src/index';
import eq from './shared/eq';


describe('omitIndexes', function() {
  it('tests currying', function () {
    const indexes = [1, 3];
    const arr = ['a', 'b', 'c', 'd'];
    const expected = ['a', 'c'];

    eq(RA.omitIndexes(indexes, arr), expected);
    eq(RA.omitIndexes(indexes)(arr), expected);
  });

  it('tests non existing indexes are omitted', function() {
    const indexes = [-1, 1, 3];
    const arr = ['a', 'b', 'c', 'd'];
    const expected = ['a', 'c'];

    eq(RA.omitIndexes(indexes, arr), expected);
  });

  it('tests when empty indexes', function() {
    const indexes = [];
    const arr = ['a', 'b', 'c', 'd'];
    const expected = arr;

    eq(RA.omitIndexes(indexes, arr), expected);
  });

  it('tests when empty list', function() {
    const indexes = [1, 3];
    const arr = [];
    const expected = arr;

    eq(RA.omitIndexes(indexes, arr), expected);
  });

  it('tests when empty indexes and list', function() {
    const indexes = [];
    const arr = [];
    const expected = arr;

    eq(RA.omitIndexes(indexes, arr), expected);
  });
});
