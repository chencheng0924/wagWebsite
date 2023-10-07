import API from "@/utils/api"
import dayjs from 'dayjs'
const commonStore = useCommonStore()
export const usetestPage = () => {
  const baseUrl = 'http://210.69.38.117:5010/'
  const header = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${commonStore.token}`,
    device: 'App'
  }
  const getList = (data: object) => {
    return new Promise((resolve, reject) => {
      API.get(`${baseUrl}api/Fellowship/Events`, data, header).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  return {
    getList
  }
}