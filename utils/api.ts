const fetch = (url: string, option: any, header?: any) => {
const commonStore = useCommonStore()
  return new Promise((resolve, reject) => {
    useFetch(url, {
      onRequest({ request, options }) {
        console.log(header)
        if(!header){
          options.headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${commonStore.token}`,
          }
        } else {
          options.headers = header 
        }
      },
      onResponse({ request, response, options }){

      },
      onResponseError({ request, response, options }) {
        // 錯誤api攔截
        const store = useApiStore();
        store.apiStatusCode = response.status;
      },
      ...option
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
export default new (class API{
  get(url: string, params?: any, header?: any){
    return fetch(url, {method: "get", params}, header)
  }
  post(url: string, body?: any, header?: any){
    return fetch(url, {method: "post", body}, header)
  }
  patch(url: string, body?: any, header?: any){
    return fetch(url, {method: "patch", body}, header)
  }
  put(url: string, body?: any, header?: any){
    return fetch(url, {method: "put", body}, header)
  }
  delete(url: string, body?: any, header?: any){
    return fetch(url, {method: "delete", body}, header)
  }
})