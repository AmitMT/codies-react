import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import WordCard from './../WordCard/WordCard';
import data from './../../data.json';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	root: {}
}));

const WordGrid = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{[ 0, 1, 2, 3, 4 ].map((row) => (
				<Grid
					key={`G:${row}`}
					container
					className={classes.root}
					justify='center'
					spacing={props.spacing}
				>
					{[ 0, 1, 2, 3, 4 ].map((column) => (
						<Grid key={`I:${column + row * 5}`} item>
							<WordCard>{data.words[parseInt(Math.random() * data.words.length)]}</WordCard>
						</Grid>
					))}
				</Grid>
			))}
		</div>
	);
};

WordGrid.propTypes = {
	spacing: PropTypes.number
};

WordGrid.defaultProps = {
	spacing: 1
};

export default WordGrid;
