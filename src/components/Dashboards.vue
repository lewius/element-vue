<template>
  <div class="dashboard">
    <el-row  type="flex" class="row-bg" justify="space-between">
      <el-col :span="12" class="chart" style="width: 40%;">
        <span>当前选中了: {{ cityName || '-' }}</span>
        <ve-map style="height: 400px;" :data="mapData" :settings="mapSettings" :events="mapEvents"></ve-map>
      </el-col>
      <el-col :span="12" class="chart" style="width: 58%;">
        <ve-ring :data="pieData"></ve-ring>
      </el-col>
    </el-row>

    <el-row  type="flex" class="row-bg" justify="space-between">
      <el-col :span="12" class="chart">
        <ve-line :data="chartData" :settings="lineSettings"></ve-line>
      </el-col>
      <el-col :span="12" class="chart">
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </el-col>
    </el-row>
    
    <el-row  type="flex" class="row-bg" justify="space-between">
      <el-col :span="12" class="chart">
        <ve-histogram :data="chartData"></ve-histogram>
      </el-col>
      <el-col :span="12" class="chart">
        <ve-line :data="chartData" :extend="extend"></ve-line>
      </el-col>
    </el-row>
    
    <el-row  type="flex" class="row-bg" justify="space-between">
      <el-col :span="12" class="chart">
          <ve-pie :data="pieData" :settings="radiusPieSettings"></ve-pie>
      </el-col>
      <el-col :span="12" class="chart">
        <ve-pie :data="pieData" :settings="pieSettings"></ve-pie>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: String,
    msg: String
  },
  data() {
      this.mapEvents = {
        click: (v) => {
          this.cityName = v.name
        }
      }
    return {
      cityName: '',
      mapData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
        ]
      },
      mapSettings: {
        position: 'china',
        // selectData: true,
        // selectedMode: 'single',
        dimension: '位置',
        metrics: ['人口', '面积'],
        dataType: {
          '面积': 'KMB'
        }
      },
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      chartSettings: {
        stack: { '用户': ['访问用户', '下单用户'] },
        area: true
      },
      lineSettings: {
        smooth: false
      },
      pieData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      pieSettings: {
        limitShowNum: 5
      },
      radiusPieSettings: {
        roseType: 'radius'
      },
      extend: {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        }
      }

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  background-color: #edf1f7;

}
.dashboard .el-row {
  margin-bottom: 1.25rem;
}
.chart {
  background-color: #fff;
  width: 49%;
}

.chart .ve-line, .chart .ve-histogram, .chart .ve-pie, .chart .ve-ring, .chart .ve-map {
  padding-top: 15px;
}
</style>
