<!--
 * @Author: migor
 * @Date: 2021-11-25 20:54:31
 * @LastEditors: migor
 * @LastEditTime: 2021-11-26 19:58:13
 * @Description: file content
-->
<template>
  <div class="pop-content">
    <div class="pop-header">
      <a-select
        v-model="systemIds"
        style="width: 260px"
        mode="multiple"
        placeholder="请选择要查看的系统"
        :options="systemMap"
        :max-tag-count="2"
        @change="handleChange"
      />
      <a-button
        type="primary"
        @click="handleClick"
      >
        刷新
      </a-button>
    </div>
    <div class="pop-table">
      <a-table
        :pagination="false"
        bordered
        :loading="loading"
        :data-source="dataSource"
        :columns="columns"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.dataIndex === 'state'">
            <a-tag :color="getColor(record.state)">
              {{ record.state }}
            </a-tag>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import { clusterUrl, detailUrl, systemMap, beReferUrl, feReferUrl, historyFeUrl, tags } from '../../utils/const'
import { request } from '../../utils/request'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      systemMap,
      clusterUrl,
      detailUrl,
      systemIds: [],
      requestOption: [],
      dataSource: [],
      loading: false,
      tags,
      columns: [
        {
          title: '名称',
          dataIndex: 'app',
          key: 'app'
        },
        {
          title: '分支',
          dataIndex: 'branch',
          key: 'branch'
        },
        {
          title: '环境',
          dataIndex: 'env',
          key: 'env'
        },
        {
          title: '部署状态',
          dataIndex: 'state_name',
          key: 'state_name'
        },
        {
          title: '更新时间',
          dataIndex: 'updated_at',
          key: 'updated_at'
        },
         {
          title: '操作人员',
          dataIndex: 'operator',
          key: 'operator'
        },
        {
          title: '运行状态',
          dataIndex: 'state',
          key: 'state'
        },
      ]
    }
  },
  methods: {
    handleChange(val, option) {
      this.requestOption = []
      option.map(item => {
        const envType = this.getEnvType(item.label)
        const results = item.value.map(res => {
          const result = {
            type: envType,
            id: res
          }
          return result
        })

        this.requestOption = this.requestOption.concat(results)
      })
    },
    // 获取是前端还是后端
    // type 1 后端 2 前端
    getEnvType(name) {
      const nameList = name.split('-')
      const type = nameList.pop() !== 'web' ? 1 : 2
      return type
    },
    getColor(val) {
      const fileter = this.tags.find(s => s.label.includes(val))
      return fileter ? fileter.value : '#2db7f5'
    },
    async handleClick() {
      await this.handleRequest()
    },
    async handleRequest() {
      this.loading = true
      this.dataSource = []
      const res = await this.requestOption.reduce(async (memo, item) => {
        const results = await memo;
        
        const columnItem = item.type === 1 ? await this.getBackEnd(item.id) : await this.getFrontEnd(item.id)
        
        return [...results, columnItem]
      }, [])
      this.dataSource = res.flat(1)
      this.loading = false
    },
    // 获取后端数据
    async getBackEnd(id) {
      const refUrl = beReferUrl(id)
      const clusterData = await request(clusterUrl, id, refUrl)

      let columnItem = {
        app: clusterData.data.app,
        branch: clusterData.data.branch,
        env: clusterData.data.env,
        state_name: clusterData.data.state_name,
        updated_at: dayjs(clusterData.data.updated_at).format('YYYY-MM-DD HH:mm:ss'),
        operator: clusterData.data.operation.operator
      }

      const detailUrl = this.detailUrl + clusterData.data.cluster_name + "&limit=10"

      const detailData = await request(detailUrl, id)

      columnItem = {
        ...columnItem,
        state: detailData.results.length ? detailData.results[0].state : ''
      }

      return columnItem
    },
    async getFrontEnd(id) {
      const refUrl = feReferUrl(id)

      const data = await request(historyFeUrl(id), id, refUrl, false)
      const columns = []
      data.results.map(item => {
        columns.push( {
            app: item.project_name,
            branch: item.branches,
            env: item.env,
            state_name: item.task_status,
            updated_at: dayjs(item.start_time).format('YYYY-MM-DD HH:mm:ss'),
            operator: item.username,
            state:item.task_status
        })
      })

      return columns
    }
  }
}
</script>

<style lang="less" scoped>
.pop-content {
  font-size: 10px !important;
  width: 700px;
  height: 500px;
  padding: 10px;

  .pop-header {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .pop-table {
    margin-top: 10px;
  }
}
</style>

