import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '4px',
		display: 'flex',
		width: theme.spacing(24),
		height: theme.spacing(17),
		background: '#EEEEEE',
		transition: '0.2s all ease',
		alignItems: 'center',
		justifyContent: 'center',
		wordBreak: 'break-all',
		overflow: 'hidden',
		padding: 0,

		'&:hover': {
			background: '#EEEEEE'
		},

		'& h6': {
			fontSize: '1.125rem',
			textTransform: 'uppercase',
			fontWeight: theme.typography.fontFamily.bold,
			lineHeight: 1.6,
			letterSpacing: '0.0075em'
		}
	}
}));

const WordCard = (props) => {
	const classes = useStyles();
	const [ shadow, setShadow ] = useState(2);

	return (
		<React.Fragment>
			<Button
				variant='contained'
				className={classes.root}
				elevation={shadow}
				onMouseEnter={() => setShadow(7)}
				onMouseLeave={() => setShadow(2)}
			>
				<h6>{props.children}</h6>
			</Button>
		</React.Fragment>
	);
};

export default WordCard;
