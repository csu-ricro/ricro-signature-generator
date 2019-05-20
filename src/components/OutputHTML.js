/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import Input from './Input';
import Output from './Output';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import beautifyPhoneNumber from '../assets/beautify';
import _ from 'lodash';
import units from '../assets/units';
import {
  connect,
} from 'react-redux';

const styles = () => ({
  root: {
    display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    html: {
      position: 'absolute',
      // maxHeight: 0,
      // maxWidth: 0,
      // overflow: 'hidden',
    },
  });
  
  class App extends React.Component {

 output = () => {
  const { name, title } = this.props.app;
  const position = _.get(this.props.app, 'position', '').split('\n');
  // debugger;
  let phone = _.get(this.props.app, 'phone', '').toString().replace(/\D/g, '');
  phone = phone !== '' ? ` | Direct: ${beautifyPhoneNumber(phone)}` : '';
  const unit = units[this.props.app.unitId];
  console.log('Function', phone);
  return phone.toString();
  return (
  `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Signature Generator Template</title>
</head>
<body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;box-sizing:border-box;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:100%!important">
  <style>@media only screen{html{min-height:100%;background:#cacaca}}@media only screen and (max-width:816px){.small-float-center{margin:0 auto!important;float:none!important;text-align:center!important}.small-text-center{text-align:center!important}.small-text-left{text-align:left!important}.small-text-right{text-align:right!important}}@media only screen and (max-width:816px){.hide-for-large{display:block!important;width:auto!important;overflow:visible!important;max-height:none!important;font-size:inherit!important;line-height:inherit!important}}@media only screen and (max-width:816px){table.body table.container .hide-for-large,table.body table.container .row.hide-for-large{display:table!important;width:100%!important}}@media only screen and (max-width:816px){table.body table.container .callout-inner.hide-for-large{display:table-cell!important;width:100%!important}}@media only screen and (max-width:816px){table.body table.container .show-for-large{display:none!important;width:0;mso-hide:all;overflow:hidden}}@media only screen and (max-width:816px){table.body img{width:auto;height:auto}table.body center{min-width:0!important}table.body .container{width:95%!important}table.body .column,table.body .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}table.body .column .column,table.body .column .columns,table.body .columns .column,table.body .columns .columns{padding-left:0!important;padding-right:0!important}table.body .collapse .column,table.body .collapse .columns{padding-left:0!important;padding-right:0!important}td.small-1,th.small-1{display:inline-block!important;width:8.33333%!important}td.small-2,th.small-2{display:inline-block!important;width:16.66667%!important}td.small-3,th.small-3{display:inline-block!important;width:25%!important}td.small-4,th.small-4{display:inline-block!important;width:33.33333%!important}td.small-5,th.small-5{display:inline-block!important;width:41.66667%!important}td.small-6,th.small-6{display:inline-block!important;width:50%!important}td.small-7,th.small-7{display:inline-block!important;width:58.33333%!important}td.small-8,th.small-8{display:inline-block!important;width:66.66667%!important}td.small-9,th.small-9{display:inline-block!important;width:75%!important}td.small-10,th.small-10{display:inline-block!important;width:83.33333%!important}td.small-11,th.small-11{display:inline-block!important;width:91.66667%!important}td.small-12,th.small-12{display:inline-block!important;width:100%!important}.column td.small-12,.column th.small-12,.columns td.small-12,.columns th.small-12{display:block!important;width:100%!important}table.body td.small-offset-1,table.body th.small-offset-1{margin-left:8.33333%!important;Margin-left:8.33333%!important}table.body td.small-offset-2,table.body th.small-offset-2{margin-left:16.66667%!important;Margin-left:16.66667%!important}table.body td.small-offset-3,table.body th.small-offset-3{margin-left:25%!important;Margin-left:25%!important}table.body td.small-offset-4,table.body th.small-offset-4{margin-left:33.33333%!important;Margin-left:33.33333%!important}table.body td.small-offset-5,table.body th.small-offset-5{margin-left:41.66667%!important;Margin-left:41.66667%!important}table.body td.small-offset-6,table.body th.small-offset-6{margin-left:50%!important;Margin-left:50%!important}table.body td.small-offset-7,table.body th.small-offset-7{margin-left:58.33333%!important;Margin-left:58.33333%!important}table.body td.small-offset-8,table.body th.small-offset-8{margin-left:66.66667%!important;Margin-left:66.66667%!important}table.body td.small-offset-9,table.body th.small-offset-9{margin-left:75%!important;Margin-left:75%!important}table.body td.small-offset-10,table.body th.small-offset-10{margin-left:83.33333%!important;Margin-left:83.33333%!important}table.body td.small-offset-11,table.body th.small-offset-11{margin-left:91.66667%!important;Margin-left:91.66667%!important}table.body table.columns td.expander,table.body table.columns th.expander{display:none!important}table.body .right-text-pad,table.body .text-pad-right{padding-left:10px!important}table.body .left-text-pad,table.body .text-pad-left{padding-right:10px!important}table.menu{width:100%!important}table.menu td,table.menu th{width:auto!important;display:inline-block!important}table.menu.small-vertical td,table.menu.small-vertical th,table.menu.vertical td,table.menu.vertical th{display:block!important}table.menu[align=center]{width:auto!important}table.button.small-expand,table.button.small-expanded{width:100%!important}table.button.small-expand table,table.button.small-expanded table{width:100%}table.button.small-expand table a,table.button.small-expanded table a{text-align:center!important;width:100%!important;padding-left:0!important;padding-right:0!important}table.button.small-expand center,table.button.small-expanded center{min-width:0}}</style>
  <script id="__bs_script__">//<![CDATA[
    document.write("<script async src='/browser-sync/browser-sync-client.js?v=2.26.4'>
      <\/script>".replace("HOST", location.hostname));
      //]]>
    </script>
    <span class="preheader" style="color:#cacaca;display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden">
    </span>
    <table class="body" style="Margin:0;background:#cacaca;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%">
      <tbody>
        <tr style="padding:0;text-align:left;vertical-align:top">
          <td class="center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
            <center data-parsed="" style="min-width:800px;width:100%">
              <table align="center" class="container ricro-sg float-center" style="Margin:0 auto;background:#fdfdfd;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:800px">
                <tbody>
                  <tr style="padding:0;text-align:left;vertical-align:top">
                    <td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                      <table class="spacer" style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td height="16px" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">&amp;nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table align="center" class="container ricro-sg__body" style="Margin:0 auto;background:#fdfdfd;border-collapse:collapse;border-spacing:0;margin:0 auto;padding:0;text-align:inherit;vertical-align:top;width:800px">
                        <tbody>
                          <tr style="padding:0;text-align:left;vertical-align:top">
                            <td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                              <p class="ricro-sg__user" style="Margin:0;Margin-bottom:10px;color:#59595b;font-family:Roboto,Arial,sans-serif;font-size:1em;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;margin-left:38px;padding:0;text-align:left">John Doe, Ph.D.</p>
                              <p style="Margin:0;Margin-bottom:10px;color:#59595b;font-family:Roboto,Arial,sans-serif;font-size:.8em;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;margin-left:38px;padding:0;text-align:left">Position Name One<br>
                                <span class="ricro-sg__unit-name" style="font-weight:700">Research Integrity &amp;amp; Compliance Review Office</span>
                              </p>
                              <p style="Margin:0;Margin-bottom:10px;color:#59595b;font-family:Roboto,Arial,sans-serif;font-size:.8em;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;margin-left:38px;padding:0;text-align:left">
                                <span class="ricro-sg__divider" style="border-right:2px solid #8a8a8a;padding-right:5px">2011 Campus Delivery</span> Fort Collins, CO 80523-2011<br>
                                <span class="ricro-sg__divider" style="border-right:2px solid #8a8a8a;padding-right:5px">208 University Services Center</span> Colorado State University<br>
                                <span class="ricro-sg__divider" style="border-right:2px solid #8a8a8a;padding-right:5px">Office: (970) 491-1553</span> Direct: ${phone}</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table align="center" class="container ricro-sg__unit-image" style="Margin:0 auto;background:#fdfdfd;border-collapse:collapse;border-spacing:0;margin:0 auto;padding:0;text-align:inherit;vertical-align:top;width:800px">
                          <tbody>
                            <tr style="padding:0;text-align:left;vertical-align:top">
                              <td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">
                                <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                                  <tbody>
                                    <tr style="padding:0;text-align:left;vertical-align:top">
                                      <th class="small-12 large-12 columns first last" valign="middle" style="Margin:0 auto;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:784px">
                                        <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
                                          <tbody>
                                            <tr style="padding:0;text-align:left;vertical-align:top">
                                              <th style="Margin:0;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                                                <a href="http://ricro.colostate.edu" style="Margin:0;color:#1e4d2b;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left;text-decoration:underline">
                                                  <img src="https://services.ricro.colostate.edu/_external/signatures/ResInt-VPR-CSU-2-H357-96.png" alt="Research Integrity and Compliance Review Office at Colorado State University" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:100%;outline:0;text-decoration:none;width:auto">
                                                </a>
                                              </th>
                                              <th class="expander" style="Margin:0;color:#0a0a0a;font-family:Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0">
                                              </th>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <br>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="display:none;white-space:nowrap;font:15px courier;line-height:0">&amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp; &amp;nbsp;</div>
    </body>
    </html>`);
 };

     copy=() => {
      const el = document.querySelector('#text');
      el.select();
      document.execCommand('copy');
    }

    render() {
      const { classes } = this.props;
      const outputString = this.output()
      console.log('Render', outputString, this.output())
        return (
          <React.Fragment>

            <textarea className={classes.html} id="text">
            {this.output()}
            </textarea>
            <Button id="button" onClick={this.copy}>Copy raw HTML</Button>
          </React.Fragment>

);
    }
}
App.defaultProps = { unitId: 'ricro', name: '', title: '' };
const mapStateToProps = (state) => {
  return {
    app:state.App,
  };
};
export default connect(
  mapStateToProps,
)(withStyles(styles)(App));
