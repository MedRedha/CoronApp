import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ColorLens from '@material-ui/icons/ColorLens';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import StatusCode from 'network/StatusCode';
import CookieManager from 'network/CookieManager';
import DrawerMenu from './DrawerMenu';
import Const from '../../constants/Const';
import DateUtil from '../../utils/DateUtil';
import { white } from 'color-name';
require('react-grid-layout/css/styles.css');
require('react-resizable/css/styles.css');
require('../../static/css/react-grid-layout.css');

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'absolute',
        height: 56,
        [theme.breakpoints.up('sm')]: {
            height: 64,
        },
        // marginLeft: Const.DRAWER_WIDTH,
        // [theme.breakpoints.up('lg')]: {
        //     width: `calc(100% - ${Const.DRAWER_WIDTH}px)`,
        // },
    },
    appBarTitle: {
        alignSelf: 'center',
        background: 'white',
        fontSize: 16,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    appBarTitleMargin: {
        flex: 1,
    },
    appBarStickyBoard: {
        fontSize: 16,
        paddingRight: 16,
        color: theme.colors.appBarContentText,
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'none',
            color: theme.colors.appBarContentText,
        },
    },
    menuIcon: {
        color: theme.colors.colorDark,
    },
    menuCategoryText: {
        display: 'block',
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        fontSize: 14,
        color: theme.colors.drawerMenuCategoryText,
    },
    notiIcon: {
        color: theme.colors.colorDark,
    },
    notiDrawer: {
        width: '80%',
        maxWidth: 360,
        overflow: 'auto',
    },
    notiItem: {
        overflow: 'unset',
    },
    notiIconTypeNotice: {
        // width: 56,
        // height: 56,
        backgroundColor: theme.colors.colorArray[1],
    },
    notiIconTypeWarning: {
        // width: 56,
        // height: 56,
        backgroundColor: theme.colors.colorArray[2],
    },
    notiIconTypeEmergency: {
        // width: 56,
        // height: 56,
        backgroundColor: theme.colors.colorArray[0],
    },
    avatar: {
        width: 56,
        height: 56,
        // color: theme.colors.colorDark,
    },
    drawerPaper: {
        width: Const.DRAWER_WIDTH,
        overflow: 'auto',
        [theme.breakpoints.up('lg')]: {
            width: Const.DRAWER_WIDTH,
            position: 'relative',
            // height: '100%',
            paddingTop: 64,
        },
    },
    content: {
        backgroundColor: theme.colors.contentBackground,
        width: '100%',
        // padding: theme.spacing(1) * 3,
        height: 'calc(100% - 64px)',
        marginTop: 64,
        overflow: 'scroll',
        scrollBehavior: 'smooth',
        overflowScrolling: 'touch',
        WebkitOverflowScrolling: 'touch',
        [theme.breakpoints.up('xs')]: {
            // marginTop: 64,
            fontSize: 14,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 16,
            // height: 'calc(100% - 64px)',
            // marginTop: 64,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 16,
            width: 'calc(100% - 240px)',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 16,
        },
    },
    toolbar: theme.mixins.toolbar,
});

const isGuestModeAvailable = true;

class Layout extends React.Component {
    constructor(props) {
        super(props);

        let currentTimeMillis = new Date().getTime();

        this.state = {
            notifications: [
                {
                    type: Const.NOTI_TYPE_NOTICE,
                    title: 'Daily revenue is increasing!',
                    time: new Date(currentTimeMillis),
                },
                {
                    type: Const.NOTI_TYPE_WARNING,
                    title: 'CCU is too big!',
                    time: new Date(
                        currentTimeMillis - Const.TIME_MILLIS_HOUR * 3
                    ),
                },
                {
                    type: Const.NOTI_TYPE_NOTICE,
                    title: 'Your permissions are updated.',
                    time: new Date(
                        currentTimeMillis - Const.TIME_MILLIS_HOUR * 6
                    ),
                },
                {
                    type: Const.NOTI_TYPE_EMERGENCY,
                    title: 'Server is disconnected!',
                    time: new Date(
                        currentTimeMillis - Const.TIME_MILLIS_HOUR * 9
                    ),
                },
                {
                    type: Const.NOTI_TYPE_WARNING,
                    title: 'Sensor disconnected!',
                    time: new Date(currentTimeMillis - Const.TIME_MILLIS_DAY),
                },
                {
                    type: Const.NOTI_TYPE_NOTICE,
                    title: 'Daily new user is increasing!',
                    time: new Date(
                        currentTimeMillis -
                            Const.TIME_MILLIS_DAY -
                            Const.TIME_MILLIS_HOUR * 3
                    ),
                },
                {
                    type: Const.NOTI_TYPE_EMERGENCY,
                    title: 'Server instance will down soon!',
                    time: new Date(
                        currentTimeMillis -
                            Const.TIME_MILLIS_DAY -
                            Const.TIME_MILLIS_HOUR * 6
                    ),
                },
                {
                    type: Const.NOTI_TYPE_NOTICE,
                    title: 'Database version updated.',
                    time: new Date(
                        currentTimeMillis -
                            Const.TIME_MILLIS_DAY -
                            Const.TIME_MILLIS_HOUR * 9
                    ),
                },
                {
                    type: Const.NOTI_TYPE_NOTICE,
                    title: 'Weekly report updated.',
                    time: new Date(
                        currentTimeMillis - Const.TIME_MILLIS_3_DAYS
                    ),
                },
                {
                    type: Const.NOTI_TYPE_EMERGENCY,
                    title: 'Server disconnected!',
                    time: new Date(
                        currentTimeMillis - Const.TIME_MILLIS_3_DAYS
                    ),
                },
                {
                    type: Const.NOTI_TYPE_WARNING,
                    title: 'CCU is too big!',
                    time: new Date(
                        currentTimeMillis - Const.TIME_MILLIS_3_DAYS
                    ),
                },
            ],
            // Permission
            permissionKeyArray: [],
            // Drawer
            menuDrawerOpen: false,
            notiDrawerOpen: false,
            // Theme menu
            themeMenuAnchorElem: null,
            // User menu
            userMenuAnchorElem: null,
            // Auth
            auth: CookieManager.getCookie('userId') !== undefined,
            isSuperuser: CookieManager.getCookie('isSuperuser') === 'true',
        };
    }

    componentDidMount() {
        if (this.state.auth || !isGuestModeAvailable) {
            if (document.cookie === undefined || document.cookie === '') {
                window.location = '/signin';
            }
        }
    }

    handleMenuDrawerToggle = () => {
        this.setState({ menuDrawerOpen: !this.state.menuDrawerOpen });
    };

    handleNotiDrawerToggle = () => {
        this.setState({ notiDrawerOpen: !this.state.notiDrawerOpen });
    };

    openThemeMenu = (event) => {
        this.setState({ themeMenuAnchorElem: event.currentTarget });
    };

    closeThemeMenu = () => {
        this.setState({ themeMenuAnchorElem: null });
    };

    onThemeChange = (themeKey) => {
        this.setState(
            {
                themeMenuAnchorElem: null,
            },
            () => {
                this.props.onThemeChange(themeKey);
            }
        );
    };

    openUserMenu = (event) => {
        this.setState({ userMenuAnchorElem: event.currentTarget });
    };

    closeUserMenu = () => {
        this.setState({ userMenuAnchorElem: null });
    };

    onSignInClicked = () => {
        window.location = '/signin';
    };

    onSettingsClicked = () => {
        if (this.state.auth || !isGuestModeAvailable) {
            window.location = '/settings';
        }
    };

    onSignOutClicked = () => {
        if (this.state.auth || !isGuestModeAvailable) {
            CookieManager.deleteAllCookie();
            window.location = '/signin';
        }
    };

    readUserPermissionsCallback = (statusCode, response) => {
        switch (statusCode) {
            case StatusCode.OK:
                // console.log('---------------------')
                // console.log(response)

                var permissionKeyArray = [];

                response.forEach((adminPermission) => {
                    var key = adminPermission.permission.key;
                    permissionKeyArray.push(key);
                });

                // console.log(permissionKeyArray)
                this.setState({ permissionKeyArray: permissionKeyArray });
                break;
            case StatusCode.NOT_FOUND:
                break;
            default:
                alert(response.msg);
                break;
        }
    };

    render() {
        const {
            themeMenuAnchorElem,
            userMenuAnchorElem,
            auth,
            isSuperuser,
        } = this.state;
        const { classes, theme, themeKeys, selectedThemeKey } = this.props;

        const isThemeMenuOpened = Boolean(themeMenuAnchorElem);
        const isUserMenuOpened = Boolean(userMenuAnchorElem);

        const childrenWithExtraProp = React.Children.map(
            this.props.children,
            (child) => {
                return React.cloneElement(child, {
                    // store: store,
                    showMessageSnackbar: this.props.showMessageSnackbar,
                    hideMessageSnackbar: this.props.hideMessageSnackbar,
                });
            }
        );

        const getNotiAvatarByType = (notiType) => {
            if (notiType === Const.NOTI_TYPE_NOTICE) {
                return (
                    <Avatar className={classes.notiIconTypeNotice}>
                        <Info />
                    </Avatar>
                );
            } else if (notiType === Const.NOTI_TYPE_WARNING) {
                return (
                    <Avatar className={classes.notiIconTypeWarning}>
                        <Warning />
                    </Avatar>
                );
            } else if (notiType === Const.NOTI_TYPE_EMERGENCY) {
                return (
                    <Avatar className={classes.notiIconTypeEmergency}>
                        <ErrorOutline />
                    </Avatar>
                );
            }
        };

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    {/* AppBar */}
                    <AppBar position="absolute" className={classes.appBar}>
                        <Toolbar>
                            {/*<Hidden lgUp>*/}
                            {/*    <IconButton*/}
                            {/*        color="inherit"*/}
                            {/*        aria-label="open drawer"*/}
                            {/*        onClick={this.handleMenuDrawerToggle}>*/}
                            {/*        <MenuIcon />*/}
                            {/*    </IconButton>*/}
                            {/*</Hidden>*/}

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleMenuDrawerToggle}>
                                <MenuIcon />
                            </IconButton>

                            {/*<Hidden xsDown>*/}
                            {/*    <div*/}
                            {/*        style={{*/}
                            {/*            marginLeft: 8,*/}
                            {/*            marginRight: 5,*/}
                            {/*        }}>*/}
                            {/*        <img*/}
                            {/*            width={35}*/}
                            {/*            height={35}*/}
                            {/*            color="inherit"*/}
                            {/*            src={*/}
                            {/*                'https://i.ya-webdesign.com/images/virus-transparent-animated-gif.gif'*/}
                            {/*            }*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</Hidden>*/}

                            <Typography
                                alignCenter
                                style={{
                                    marginLeft: 40,
                                }}
                                type="title"
                                color="inherit"
                                noWrap
                                className={classes.appBarTitle}
                                onClick={() => {
                                    window.location = '/';
                                }}>
                                <img
                                    width={120}
                                    height={35}
                                    color="inherit"
                                    src={
                                        'https://belong.life/wp-content/uploads/2020/03/CoronAppLogo_Final-1.png'
                                    }
                                />
                            </Typography>

                            <Typography className={classes.appBarTitleMargin} />

                            <Hidden xsDown>
                                <a
                                    className={classes.appBarStickyBoard}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={'http://wuud.net'}>
                                    Enhanced by <b>The WuuD Team</b>
                                </a>
                            </Hidden>

                            {/* Theme select menu */}
                            <IconButton
                                className={classes.avatar}
                                aria-owns={
                                    isThemeMenuOpened ? 'menu-appbar' : null
                                }
                                aria-haspopup="true"
                                onClick={this.openThemeMenu}
                                color="inherit">
                                <ColorLens />
                            </IconButton>

                            <Menu
                                styles={{ width: 500 }}
                                id="menu-appbar"
                                anchorEl={themeMenuAnchorElem}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={isThemeMenuOpened}
                                onClose={this.closeThemeMenu}>
                                {themeKeys.map((themeKey, index) => {
                                    return (
                                        <MenuItem
                                            key={themeKey}
                                            selected={
                                                themeKey === selectedThemeKey
                                            }
                                            onClick={() =>
                                                this.onThemeChange(themeKey)
                                            }>
                                            {themeKey}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </Toolbar>
                    </AppBar>

                    {/* Drawer - Mobile */}
                    <Hidden lgUp>
                        <Drawer
                            variant="temporary"
                            anchor={'left'}
                            open={this.state.menuDrawerOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onClose={this.handleMenuDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}>
                            <DrawerMenu
                                isSuperuser={isSuperuser}
                                permissionKeyArray={
                                    this.state.permissionKeyArray
                                }
                            />
                        </Drawer>
                    </Hidden>

                    {/* Drawer - Desktop */}
                    <Hidden mdDown>
                        <Drawer
                            variant="temporary"
                            open={this.state.menuDrawerOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}>
                            <DrawerMenu
                                isSuperuser={isSuperuser}
                                permissionKeyArray={
                                    this.state.permissionKeyArray
                                }
                            />
                        </Drawer>
                    </Hidden>

                    {/* Right Drawer - Notification */}
                    <Drawer
                        type="temporary"
                        anchor="right"
                        open={this.state.notiDrawerOpen}
                        classes={{
                            paper: classes.notiDrawer,
                        }}
                        onClose={this.handleNotiDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}>
                        {this.state.notifications.map((noti, index) => {
                            return (
                                <Card key={index} className={classes.notiItem}>
                                    <CardHeader
                                        avatar={getNotiAvatarByType(noti.type)}
                                        title={noti.title}
                                        subheader={DateUtil.format(noti.time)}
                                    />
                                </Card>
                            );
                        })}
                    </Drawer>

                    {/* App content */}
                    <main
                        id="stickyboard-container"
                        className={classes.content}>
                        {childrenWithExtraProp}
                    </main>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout);
