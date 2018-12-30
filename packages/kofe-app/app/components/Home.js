// @flow
import React, {Component} from 'react';
import {Button, Row, Col, Menu, Icon} from 'antd';
import SplitPane from 'react-split-pane';
import FileExplorer from './FileExplorer';
import TestPanel from './TestsPanel';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

type Props = {};

export default class Home extends Component < Props > {
  props : Props;

  render() {
    return (
      <div data-tid="container">
      <Row>
        <Col className="col-style" span={5}>
          <FileExplorer/>
        </Col>
        <Col span={12}>
          <div>
            <TestPanel/>
          </div>
          <div></div>
      </Col>
      <Col span={7}>col-6</Col>
    </Row> < /div>
    );
  }
}