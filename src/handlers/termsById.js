var FetchById = require('./fetchById.js');

class TermsById extends FetchById {

  constructor(shared, ids, keys, vocabulary) {
    super(shared, ids, keys);
    this.vocabulary = vocabulary;
  }

  getIdQuery(id) {
    return this.wp.taxonomy(this.vocabulary).terms().term(id);
  }

  getReturnPath(id, key) {
    return (typeof key !== 'undefined')
      ? ['termsById', this.vocabulary, id, key]
      : ['termsById', this.vocabulary, id];
  }

  getCachedPath(id) {
    return `termsById.${this.vocabulary}[${id}]`;
  }
}

export default TermsById;
