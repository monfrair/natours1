class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const exludedFields = ['page', 'sort', 'limit', 'fields'];
    exludedFields.forEach(el => delete queryObj[el]);

    // 1b. Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|te|lte|lt)\b/g, match => `$${match}`);
    // console.log(JSON.parse(queryStr, 'query.str'));

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.query.sort) {
      const sortBy = this.query.sort.split(',').join(' ');
      // console.log(sortBy);
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.query.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this();
  }
}
module.exports = APIFeatures;
