import React from 'react'
import './Refugee.css'
import ImgAsset from '../trialPhoto'
export default function Refugee () {
	return (
		<div className='Refugee_Refugee'>
			<span className='Home'>Home</span>
			<span className='Dashboard'>Dashboard</span>
			<span className='Logout'>Logout</span>
			<img className='image2' src = {ImgAsset.Volunteer_image2} />
			<img className='image3' src = {ImgAsset.Volunteer_image2} />
			<img className='Rectangle5' src = {ImgAsset.Refugee_Rectangle5} />
			<img className='Rectangle4' src = {ImgAsset.Refugee_Rectangle4} />
			<span className='CreatedTasks'>Created Tasks</span>
			<span className='Taskingtitlegoeshere'>Tasking title goes here</span>
			<span className='Location'>Location</span>
			<span className='LoremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliquaSapienegetmiproinsed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed. </span>
			<div className='Rectangle4_1'/>
			<span className='Welcomeusername'>Welcome, username</span>
			<div className='Rectangle6'/>
			<span className='Needahelpinghandwithsomething'>Need a helping hand with something? </span>
			<span className='CreateTask'>Create Task</span>
			<img className='inprogressicon' src = {ImgAsset.Refugee_inprogressicon} />
			<span className='InProgress'>In Progress</span>
			<span className='Past'>Past</span>
			<span className='Created'>Created</span>
			<img className='createdicon' src = {ImgAsset.Refugee_createdicon} />
			<span className='PostedJune62022'>Posted June 6, 2022</span>
			<img className='pasticon' src = {ImgAsset.Refugee_pasticon} />
		</div>
	)
}