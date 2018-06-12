import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingNav from './settingNav.js'
import {Switch, Route, Redirect } from 'react-router-dom'
import BasicPage from '../settings/basicPage'
import AboutPage from "../settings/aboutPage"
import PhotoPage from "../settings/photopage"
import AccountPage from "../settings/accountPage";


const SettingDashBoard = () => {
  return <Grid>
      <Grid.Column width={12} >
        <Switch>
        <Redirect />
          <Route path="/settings/basics" component = {BasicPage}/>
          <Route path="/settings/about" component ={AboutPage} />
          <Route path="/settings/photos" component ={PhotoPage}/>
          <Route path="/settings/account" component ={AccountPage}/>
        </Switch>
      </Grid.Column>

      <Grid.Column width={4}>
        <SettingNav />
      </Grid.Column>
    </Grid>;
}

export default SettingDashBoard
