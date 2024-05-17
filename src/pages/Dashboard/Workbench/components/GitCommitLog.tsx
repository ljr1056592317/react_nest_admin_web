/*
 * @Description: Git 更新日志
 * @Version: 2.0
 * @Author: admin丶
 * @Date: 2023-10-11 09:54:01
 * @LastEditors: admin丶
 * @LastEditTime: 2023-10-11 10:00:17
 */
import { useIntl } from '@umijs/max'
import { useRequest } from 'ahooks'
import { Card, Space, Timeline, Typography } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import { FC } from 'react'

import { formatPerfix, isSuccess } from '@/utils'
import { ROUTES } from '@/utils/enums'

const { Text } = Typography;

const GitCommitLog: FC = () => {
  // 国际化工具
  const { formatMessage } = useIntl();
  // dayjs 相对时间
  dayjs.extend(relativeTime);
  /**
 * @description: 请求项目 commit 日志
 * @author: admin丶
 */
  const { data: commitList, loading: commitLoading } = useRequest(
    async () => {
      const response = await fetch('https://api.github.com/repos/baiwumm/react_nest_admin_web/commits?page=1&per_page=5')
      if (isSuccess(response.status)) {
        const result = await response.json()
        return result
      }
      return []
    })
  return (
    <Card title={formatMessage({ id: formatPerfix(ROUTES.WORKBENCH, 'git-log') })} loading={commitLoading}>
      <Timeline
        items={
          commitList?.map((item) => {
            return {
              children: (
                <Space direction="vertical" size={0} style={{ display: 'flex' }}>
                  <a onClick={() => window.open(item.html_url)}>
                    {item.commit.message}
                  </a>
                  <Text type="secondary">{dayjs(item.commit.author.date).fromNow()}</Text>
                </Space>
              ),
            }
          })
        }
      />
    </Card>
  )
}
export default GitCommitLog