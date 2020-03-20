// src/base/DrawerMenu.js

import React from 'react';
import PropTypes from 'prop-types';

import _ from 'underscore';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import InboxIcon from '@material-ui/icons/MoveToInbox';

import SidebarMenuDict from '../../sidebar/SidebarMenuDict';
import SidebarCategoryName from '../../sidebar/SidebarCategoryName';

import Const from '../../constants/Const';

const styles = (theme) => ({
    drawerContainer: {
        position: 'relative',
        height: '100%',
    },
    menuItemList: {
        width: '100%',
        maxWidth: 360,
    },
    menuCategory: {
        color: theme.colors.drawerMenuCategoryText,
        fontWeight: 400,
        fontSize: 12,
    },
    menuItem: {
        marginTop: 0,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    menuItemSelected: {
        marginTop: 0,
        background: theme.colors.drawerMenuSelectedBackground,
        borderRight: '10px solid ' + theme.colors.drawerMenuSelectedPin,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    menuItemIcon: {
        // color: theme.colors.colorDark,
    },
    menuItemText: {
        // color: theme.colors.colorDark,
        fontWeight: 500,
        fontSize: 14,
    },
    menuItemTextSelected: {
        // color: theme.colors.colorDark,
        fontWeight: 700,
        fontSize: 14,
    },
    attributionContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        padding: 16,
    },
    attributionItem: {
        fontSize: 14,
        color: theme.colors.contentText,
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
    },
});

class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            permittedMenuDict: {},
        };
    }

    componentDidMount() {
        this.updatePermittedMenuDict(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.updatePermittedMenuDict(nextProps);
    }

    updatePermittedMenuDict = (props) => {
        // Temporarily disabled
        if (props.isSuperuser) {
            this.setState({ permittedMenuDict: SidebarMenuDict });
        } else {
            this.updatePermittedMenuList(props.permissionKeyArray);
        }
    };

    onSignOutBtnClicked = () => {
        console.log('clicked');
    };

    updatePermittedMenuList = (permissionKeyArray) => {
        var permittedMenuDict = {};

        Object.keys(SidebarMenuDict).map((sidebarCategoryKey) => {
            let categoryMenus = SidebarMenuDict[sidebarCategoryKey];

            var categoryMenuArray = [];
            categoryMenus.map((menu) => {
                if (
                    !menu.need_permission ||
                    _.contains(permissionKeyArray, menu.url)
                ) {
                    categoryMenuArray.push(menu);
                }
            });

            if (categoryMenuArray.length > 0) {
                permittedMenuDict[sidebarCategoryKey] = categoryMenuArray;
            }
        });

        this.setState({ permittedMenuDict: permittedMenuDict });
    };

    render() {
        const { classes, theme } = this.props;
        const { permittedMenuDict } = this.state;

        return (
            <div className={classes.drawerContainer}>
                {/* Drawer Menus */}
                {Object.keys(permittedMenuDict).map((sidebarCategoryKey) => {
                    let categoryMenus = permittedMenuDict[sidebarCategoryKey];

                    return (
                        <div key={sidebarCategoryKey}>
                            <Divider />
                            <List
                                className={classes.menuItemList}
                                subheader={
                                    categoryMenus.length > 1 ? (
                                        <ListSubheader
                                            className={classes.menuCategory}
                                            disableSticky={true}>
                                            {
                                                SidebarCategoryName[
                                                    sidebarCategoryKey
                                                ]
                                            }
                                        </ListSubheader>
                                    ) : null
                                }>
                                {categoryMenus.map((menu) => {
                                    let isSelected =
                                        menu.url === window.location.pathname;

                                    return (
                                        <ListItem
                                            button
                                            key={menu.value}
                                            className={
                                                isSelected
                                                    ? classes.menuItemSelected
                                                    : classes.menuItem
                                            }
                                            component="a"
                                            href={menu.url}>
                                            <ListItemIcon
                                                color="inherit"
                                                className={
                                                    classes.menuItemIcon
                                                }>
                                                {menu.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                disableTypography={true}
                                                primary={menu.title}
                                                className={
                                                    isSelected
                                                        ? classes.menuItemTextSelected
                                                        : classes.menuItemText
                                                }
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </div>
                    );
                })}

                <div className={classes.attributionContainer}>
                    <div>
                        <a
                            className={classes.attributionItem}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={'https://github.com/MedRedha/CoronApp'}>
                            GitHub repository <b>CoronApp</b>
                        </a>
                    </div>

                    <div>
                        <a
                            className={classes.attributionItem}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={'http://stickyboard.co.kr'}>
                            Powered by <b>StickyBoard</b>
                        </a>
                    </div>

                    <div>
                        <a
                            className={classes.attributionItem}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                                'https://ainize.ai/laeyoung/wuhan-coronavirus-api'
                            }>
                            API deployed on <b>Ainize</b>
                        </a>
                    </div>

                    <div>
                        <a
                            className={classes.attributionItem}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={'https://github.com/CSSEGISandData/COVID-19'}>
                            Data provided by <b>JHU CSSE</b>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

DrawerMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerMenu);
