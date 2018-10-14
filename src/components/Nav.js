import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItemText, Divider, ListItem } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';


const styles = {
  // root: {
  //   flexGrow: 1,
  // },
  // flex: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
  list: {
    width: 200,
    marginLeft: 20
  },
  fullList: {
    width: 'auto'
  }
};

class Nav extends Component {
  constructor(props) {
    super();
    this.state = {
      right: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  toggleDrawer() {
    this.setState({ right: !this.state.right });
  }
  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItemText>
            <a href="/">Home</a>
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/gallery">All Items Gallery</a>
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/hats">Hats</a>
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/scarves">Scraves & Shawls</a>
          </ListItemText>
        </List>
        <List>
          <ListItemText>
            <a href="/#/sweaters">Sweaters</a>
          </ListItemText>
        </List>
      </div>
    )
    return (
      <Toolbar>
        <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Menu" style={{ background: 'transparent' }}>
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </Toolbar>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
