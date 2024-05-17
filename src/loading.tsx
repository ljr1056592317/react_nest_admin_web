/*
 * @Description: 全局组件 loading 配置
 * @Version: 2.0
 * @Author: admin丶
 * @Date: 2023-08-24 09:05:47
 * @LastEditors: admin丶
 * @LastEditTime: 2023-09-26 15:27:20
 */
import { Spin } from 'antd'
import { FC } from 'react'

const ComponentLoading: FC = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: 30, overflow: 'hidden' }}>
      <Spin />
    </div>
  )
}
export default ComponentLoading