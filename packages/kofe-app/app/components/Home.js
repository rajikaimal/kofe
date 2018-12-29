// @flow
import React, {Component} from 'react';
import {Button, Row, Col, Menu, Icon} from 'antd';
import FileExplorer from './FileExplorer';
import styles from './Home.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

type Props = {};

export default class Home extends Component < Props > {
  props : Props;

  render() {
    return (
      <div data-tid="container">
        <Row>
          <Col span={6}>
            <FileExplorer/>
          </Col>
          <Col span={12}>col-12</Col>
          <Col span={6}>col-6</Col>
        </Row>
      </div>
    );
  }
}
