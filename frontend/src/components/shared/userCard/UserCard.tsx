import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import UserPhoto from './user.png';
import './userCard.scss';

export const UserCard: React.FC = () => {
	return (
		<Box boxShadow={2} className="user-card">
			<div className="leftbar">
				<img src={UserPhoto} alt="" />
				<span className="online-status"></span>
				<h3>Orest Haponov</h3>
				<p>22 y.o.</p>
				<p>
					<span></span>Ukraine
				</p>
			</div>
			<div className="rightbar">
				<div className="speaks">
					<h3>Speaks</h3>
					<div className="languages">
						<p>English</p>
						<p>Native</p>
					</div>
					<div className="languages">
						<p>Korean</p>
						<p>Intermediate</p>
					</div>
				</div>
				<div className="learning">
					<h3>Learning</h3>
					<div className="languages">
						<p>Vietnamese</p>
						<p>Pre-Intermediate</p>
					</div>
				</div>
				<div className="buttons-action">
					<Link to="/" className="add-friend">
						add friend
					</Link>
					<Link to="/chat" className="send-message">
						message
					</Link>
				</div>
			</div>
		</Box>
	);
};
