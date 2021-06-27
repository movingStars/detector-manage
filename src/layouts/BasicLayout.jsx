/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useRef } from 'react';
import { Link, useIntl, history } from 'umi';
import AvatarDropDown from '../components/GlobalHeader/AvatarDropdown';
import logo from '../assets/logo.svg';

/** Use Authorized check all menu item */
const menuDataRender = (menuList) =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return localItem;
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} Produced by Ant Group Experience Technology Department`}
    links={false}
  />
);

const BasicLayout = (props) => {
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;
  const menuDataRef = useRef([]);
  const { formatMessage } = useIntl();
  return (
    <ProLayout
      logo={logo}
      title="数据监控平台"
      formatMessage={formatMessage}
      {...props}
      fixSiderbar
      fixedHeader
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: formatMessage({
            id: 'menu.home',
          }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      rightContentRender={() => {
        return <AvatarDropDown />
      }}
      footerRender={() => {
        return defaultFooterDom;
      }}
      menuDataRender={menuDataRender}
      postMenuData={(menuData) => {
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
