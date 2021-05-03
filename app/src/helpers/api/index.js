import {authInstance, publicInstance} from '../axios';
import qs from 'qs';

/**
 *
 * @param {String} collection
 * @param {Map<String, any>} queryString
 */
export const find = async (collection, queryString) => {
  try {
    const query = qs.stringify(queryString);
    const url = `/${collection}?${query}`;
    const {data} = await publicInstance.get(url);
    return {
      success: true,
      data,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.message,
      err,
    };
  }
};

/**
 *
 * @param {String} collection
 * @param {String} id
 * @param {Map<String, any>} queryString
 */
export const findOne = async (collection, id, queryString) => {
  try {
    const query = qs.stringify(queryString);
    const url = `/${collection}/${id}?${query}`;
    const {data} = await publicInstance.get(url);
    return {
      success: true,
      data,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.message,
      err,
    };
  }
};
