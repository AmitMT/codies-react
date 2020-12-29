// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import WordGrid from './components/WordGrid/WordGrid';
import Navbar from './components/Navbar/Navbar';

const useStyles = makeStyles((theme) => ({}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Navbar />
			<WordGrid />
		</div>
	);
}

export default App;
