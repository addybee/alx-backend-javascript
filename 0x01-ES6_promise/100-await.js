import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result = {};
  try {
    const response = await Promise.all([uploadPhoto(), createUser()]);
    result.photo = await response[0];
    result.user = await response[1];
  } catch (error) {
    result = {
      photo: null,
      user: null,
    };
  }
  return result;
}
