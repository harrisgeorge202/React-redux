import React from "react";

import { User } from './../components/User';
import { Main } from './../components/Main';
import { connect } from "react-redux";
import { setName } from "./../action/userActions"



import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar'
const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};



class App extends React.Component {




    //+++++++++++++++++++++++++++++++++++++
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    showBar = () => {
        this.setState({ show: 'bar', open: false });
    };
    showFoo = () => {
        this.setState({ show: 'foo', open: false });
    };
    //+++++++++++++++++++++++++++++++++++++++++++++


    render() {



        //++++++++++++++++++++++++++++++++++++++++++++++++++++
        let content = null;
        switch (this.state.show) {
            case 'foo':
                content = (<Main />);
                break;
            case 'bar':
                content = (<User />);
                break;
            default:
                content = <h1>Waiting</h1>
        }
        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++



        return (
            <div className="container">

{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Learn about Drawer, MenuItem and Paper"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}>

                    <AppBar title="AppBar" />
                    <MenuItem id="showFooId" onClick={this.showFoo}>Show Foo</MenuItem>
                    <MenuItem id="showBarId" onClick={this.showBar}>Show Bar</MenuItem>

                </Drawer>
                <Paper style={paperStyle} zDepth={5}>

                    <Toolbar style={{ "justifyContent": "center" }}>
                        <ToolbarTitle text="Material UI" />
                    </Toolbar>
                    {content}
                    <p>Click the icon on the AppBar to open the Drawer and then pick a menu item. The text above should change.</p>
                </Paper>
{/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}











                <Main changeUsername={() => this.props.setName('Anna')} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
        //store il ninnum vannathana ee 2 states
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            //=======================================
            // Uncomment this for React redux with logger and middleware
            //========================================
            // dispatch({
            //     type: 'SET_NAME',
            //     payload: name
            // })

            dispatch(setName(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);