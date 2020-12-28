// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import WordGrid from './components/WordGrid/WordGrid';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		top: '200px'
	}
}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<WordGrid />
		</div>
	);
}

export default App;
