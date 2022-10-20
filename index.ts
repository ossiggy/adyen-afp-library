require('dotenv').config();
import request from 'request-promise';
import {
  createAccountHolder,
  createAccount,
  uploadDoc,
  checkAccountHolder,
  updateAccountHolder,
  createNoti,
  getNotiById,
  getNotiList,
  updateNoti,
  deleteNotis
} from './requests';

const operationToRun = (operation: any) => {
  // add arguments for function chosen above here
  return operation();
};

const postRequest = async (operation: any) => {
  const options = operationToRun(operation);
  try {
    const response = await request(options);
    console.log(response);
    return response;
  } catch (err: any) {
    console.error(err.message);
  }
};

// add the operation you want to run here
postRequest(uploadDoc);
