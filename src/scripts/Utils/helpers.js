import _ from 'underscore';

export default class Helpers {

  static isNumber(n) {
    return (n !== null) && (typeof n !== 'undefined') && isFinite(n) && !isNaN(n);
  }

  static filterData(data, filterObj) {
    return _.where(data, filterObj);
  }

  // http://stackoverflow.com/questions/4647817/javascript-object-rename-key
  static renameProperty(obj, oldName, newName) {
    // Do nothing if the names are the same
    if (oldName == newName) {
      return obj;
    }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (obj.hasOwnProperty(oldName)) {
      obj[newName] = obj[oldName];
      obj['key'] = oldName;
      delete obj[oldName];
    }
    return obj;
  }

  static numberWithSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  static formatValue(value) {
    if (isNaN(value) || !isFinite(value)) {
      return '';
    }
    var formattedValue;

    // if ( Math.abs( value ) > 1000000 )  formattedValue = numberWithSeparator( Math.round( value/1000 ) ) + 'K';
    if (Math.abs(value) > 100) {
      formattedValue = this.numberWithSeparator(Math.round(value));
    } else if (Math.abs(value) > 10) {
      formattedValue = Math.round(value);
    } else {
      formattedValue = Math.round(100 * value) / 100;
    }

    return formattedValue;
  }

  static filterData(data, filterObj) {
    return _.where(data, filterObj);
  }

  static isNumber(n) {
    return (n !== null) && (typeof n !== 'undefined') && isFinite(n) && !isNaN(n);
  }

  // http://stackoverflow.com/questions/4647817/javascript-object-rename-key
  static renameProperty(obj, oldName, newName) {
    // Do nothing if the names are the same
    if (oldName == newName) {
      return obj;
    }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (obj.hasOwnProperty(oldName)) {
      obj[newName] = obj[oldName];
      obj['key'] = oldName;
      delete obj[oldName];
    }
    return obj;
  }

}