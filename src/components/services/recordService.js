import http from "./httpServices";
// import {apiUrl} from "/config.json"

export function saveRecord(record){
  let apiEndPoint = `http://localhost:8000/api${window.location.pathname}`
  // let apiEndPoint = `${apiUrl}${window.location.pathname}`
  apiEndPoint = apiEndPoint.replace('/update','')

  if(record._id){
    const body = {...record};
    delete body._id;
    return http.put(apiEndPoint,body);
  }
  
  return http.post(apiEndPoint,record);
  
}


