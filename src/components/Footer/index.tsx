/*
 * @Description: 公共页脚版权
 * @Version: 2.0
 * @Author: admin丶
 * @Date: 2022-09-08 11:09:03
 * @LastEditors: Cyan
 * @LastEditTime: 2023-08-11 16:48:23
 */
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

import styles from './index.module.less'

const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{ background: 'none' }}
      copyright={`${currentYear} admin丶 by baiwumm@foxmail.com`}
      className={styles['global-footer']}
      links={[
        {
          key: 'admin丶',
          title: 'admin丶',
          href: 'https://baiwumm.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/baiwumm/react_nest_admin_web/',
          blankTarget: true,
        },
        {
          key: 'Vue3 Admin',
          title: 'Vue3 Admin',
          href: 'https://github.com/baiwumm/Vue3-Admin/',
          blankTarget: true,
        },
        {
          key: 'Vue2 Admin',
          title: 'Vue2 Admin',
          href: 'https://github.com/baiwumm/Vue2-Admin/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
