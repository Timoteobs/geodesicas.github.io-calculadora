import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Freq1 from './frequencies/One.js';
import Freq2 from './frequencies/Two.js';
import Freq3 from './frequencies/Three.js';
import Freq4 from './frequencies/Four.js';
import Freq5 from './frequencies/Five.js';
import Freq6 from './frequencies/Six.js';
import logo from './marca-geodesica.png';
import './App.css';


const styles = theme => ({
  radius: {
    textAlign: 'center'
  },
  freqTitle: {
    textAlign: 'center',
    paddingTop: '5px'
  },
  tab: {
    minWidth: 132.6
  },
	footer: {
	},
	footerDivider: {
	 marginTop: theme.spacing.unit * 4,
	 marginBottom: theme.spacing.unit * 2
	},
	footerIcon: {
		display: 'inline-block',
		verticalAlign: 'middle',
		marginLeft: theme.spacing.unit * 2
	}
});

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        radius: '',
        selectedFreq: ''
      };
  }

  handleChange = name => e => {
    this.setState({
      [name]: parseFloat(e.target.value)
    });
  }

  setFreq = (e, value) => {
    this.setState({selectedFreq: value});
  }

  render() {
    const { classes, ...props } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <div><img className="logo" src={logo} alt="Calculadora de Geodésica - Geodéscias" /></div>
        <h2>Calculadora de Geodésica através do:</h2>

        <Grid container spacing={24}>
          <Grid item xs={12} className={classes.radius}>
            <TextField
              label="Raio"
              type="number"
              id="outlined-basic"
              value={this.state.radius}
              onChange={this.handleChange('radius')}
              inputProps={{
                min: 0
              }}

            />
          </Grid>
          {this.state.radius ? <React.Fragment>
            <Grid item xs={2}>
              <Typography variant="headline" className={classes.freqTitle}>
                Frequência:
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <AppBar position='static'>
                <Tabs value={this.state.selectedFreq} onChange={this.setFreq} className="button">
                  {[1, 2, 3, 4, 5, 6].map(freq => (
                    <Tab
                      value={freq}
                      label={freq}
                      className={classes.tab}
                      key={freq}
                    />
                  ))}
                </Tabs>
              </AppBar>
            </Grid>
          </React.Fragment> : null}

					{this.state.radius >= 0 ? <React.Fragment>
						{this.state.selectedFreq === 1 && <Freq1 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 2 && <Freq2 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 3 && <Freq3 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 4 && <Freq4 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 5 && <Freq5 {...props} radius={this.state.radius} />}
						{this.state.selectedFreq === 6 && <Freq6 {...props} radius={this.state.radius} />}
					</React.Fragment> : null}

					<Grid item xs={12}>
						<Typography variant="caption" gutterBottom align="center" className={classes.footer}>
							<Divider className={classes.footerDivider} />
							
							
						</Typography>
					</Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
