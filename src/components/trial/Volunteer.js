import React from 'react'
import './Volunteer.css'
import ImgAsset from '../trialPhoto'
export default function Volunteer() {
	return (
		<div className='Volunteer_Volunteer'>
			<span className='Home'>Home</span>
			<span className='Dashboard'>Dashboard</span>
			<span className='Logout'>Logout</span>
			<img className='image2' src={ImgAsset.Volunteer_image2} />
			<img className='image3' src={ImgAsset.Volunteer_image2} />
			<img className='Rectangle1' src={ImgAsset.Volunteer_Rectangle1} />
			<span className='AvailableTasks'>Available Tasks</span>
			<div className='Ellipse1' />
			<span className='Varia'>Varia</span>
			<span className='Babysittingfrom8amto5pm'>Babysitting from 8am to 5pm</span>
			<span className='London'>London</span>
			<span className='Ineedsomeonetotakecaremy3yearolddaughterwhileImworkingPrefervolunteersnearmeThankyou'>I need someone to take care my 3-year old daughter while I’m working. Prefer volunteers near me. Thank you.</span>
			<div className='image4' />
			<img className='image6' src={ImgAsset.Volunteer_image6} />
			<img className='image7' src={ImgAsset.Volunteer_image7} />
			<span className='Text'> </span>
			<img className='image13' src={ImgAsset.Volunteer_image6} />
			<img className='image14' src={ImgAsset.Volunteer_image7} />
			<img className='Rectangle3' src={ImgAsset.Volunteer_Rectangle3} />
			<span className='Taskingtitlegoeshere'>Tasking title goes here</span>
			<span className='Location'>Location</span>
			<span className='LoremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaSapienegetmiproinsed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed. </span>
			<div className='Ellipse4' />
			<span className='Username'>Username</span>
			<img className='image11' src={ImgAsset.Volunteer_image6} />
			<img className='image12' src={ImgAsset.Volunteer_image7} />
			<img className='image8' src={ImgAsset.Volunteer_image8} />
			<span className='Available'>Available</span>
			<span className='Completed'>Completed</span>
			<span className='Accepted'>Accepted</span>
			<img className='image9' src={ImgAsset.Volunteer_image9} />
			<img className='completedicon' src={ImgAsset.Volunteer_completedicon} />
			<img className='image17' src={ImgAsset.Volunteer_image17} />
			<div className='Rectangle2' />
			<span className='PostedJune62022'>Posted June 6, 2022</span>
			<span className='Welcomeusername'>Welcome, username</span>
			<span className='ReadytotakeonataskViewthembelow'>Ready to take on a task? View them below</span>
		</div>
	)
}