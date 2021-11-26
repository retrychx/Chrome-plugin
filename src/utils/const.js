/*
 * @Author: migor
 * @Date: 2021-11-26 10:00:20
 * @LastEditors: migor
 * @LastEditTime: 2021-11-26 19:55:42
 * @Description: file content
 */
export const clusterUrl = 'https://polaris.shizhuang-inc.com/api/rubik/v2/app/clusters/?cluster_id='

export const detailUrl = 'https://polaris.shizhuang-inc.com/api/rubik/v2/pods?cluster_name='

export const beReferUrl = id => `https://polaris.shizhuang-inc.com/virtualEnv/envlistNew/envDetail/${id}`

export const historyFeUrl = id => `https://polaris.shizhuang-inc.com/api/project/application/${id}/history/?task_status=&env=&limit=10`

export const feReferUrl = id => `https://polaris.shizhuang-inc.com/deploy/project/${id}`

export const systemMap = [
  {
    label: 'erp-web',
    value: [287]
  },
  {
    label: 'stark-web',
    value: [54]
  },
  {
    label: 'erp-poizonx-web',
    value: [2033]
  },
  {
    label: 'crm-web',
    value: [1075]
  },
  {
    label: 'erp',
    value: [3744, 4300, 3951, 4100]
  },
  {
    label: 'stark',
    value: [3614,3297,3599,423,3938,3344,1015]
  },
  {
    label: 'dop',
    value: [3339]
  },
  {
    label: 'merchant-batch',
    value: [3348, 3349, 4809]
  },
  {
    label: 'merchant-data',
    value: [3669, 3330, 3995]
  },
]

export const tags = [
  {
    value: '#87d068',
    label: ['Running','confirmed']
  },
  {
    value: '#f50',
    label: ['failed']
  },
]