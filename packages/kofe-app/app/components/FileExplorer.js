import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Treebeard, decorators} from 'react-treebeard';
import styled from '@emotion/styled';
import styles from './FileExplorerStyle';
import * as filters from './FileExplorerFilter';
import { Icon, Input } from 'antd';

const data = {
    name: 'react-treebeard',
    toggled: true,
    children: [
        {
            name: 'example',
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' }
            ]
        },
        {
            name: 'node_modules',
            loading: true,
            children: []
        },
        {
            name: 'src',
            children: [
                {
                    name: 'components',
                    children: [
                        { name: 'decorators.js' },
                        { name: 'treebeard.js' }
                    ]
                },
                { name: 'index.js' }
            ]
        },
        {
            name: 'themes',
            children: [
                { name: 'animations.js' },
                { name: 'default.js' }
            ]
        },
        { name: 'Gulpfile.js' },
        { name: 'index.js' },
        { name: 'package.json' }
    ]
};


// // Example: Customising The Header Decorator To Include Icons
decorators.Header = ({style, node}) => {
    const iconStyle = {marginRight: '5px'};

    return (
        <div style={style.base}>
            <div style={style.title}>
                { node.children ? <Icon style={iconStyle} type="folder" /> : <Icon type="file" /> }

                {node.name}
            </div>
        </div>
    );
};



export default class FileExplorer extends React.Component {
    constructor() {
        super();

        this.state = {data};
        this.onToggle = this.onToggle.bind(this);
    }

    onToggle(node, toggled) {
        const {cursor} = this.state;

        if (cursor) {
            cursor.active = false;
        }

        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }

        this.setState({cursor: node});
    }

    onFilterMouseUp(e) {
        const filter = e.target.value.trim();
        if (!filter) {
            return this.setState({data});
        }
        var filtered = filters.filterTree(data, filter);
        filtered = filters.expandFilteredNodes(filtered, filter);
        this.setState({data: filtered});
    }


    render() {
        const {data: stateData, cursor} = this.state;

        return (
            <div>
                <div style={styles.searchBox}>
                    <Input placeholder="Search" />
                </div>
                <div style={styles.component}>
                    <Treebeard data={stateData}
                               decorators={decorators}
                               onToggle={this.onToggle}/>
                </div>
            </div>
        );
    }
}