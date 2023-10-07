import API from "@/utils/api"
import { ElLoading } from 'element-plus'
import dayjs from 'dayjs'
export const useCommon = () => {
  const loadingScreenTest = (val: boolean) => {
    const loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    if (val) {
      setTimeout(() => {
        loading.close()
      }, 500)
    }
  }
  const dateChange = (date: string) => {
    return dayjs(date).format('YYYY-MM-DD')
  }
  return {
    loadingScreenTest,
    dateChange,
  }
}