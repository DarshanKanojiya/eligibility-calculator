import React, { useState } from 'react';
import Bin from '../../assets/bin.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import AgeModal from '../Modals/AgeModal';
import EducationModal from '../Modals/EducationModal.js';
import WorkExperiencesModal from '../Modals/WorkExperiencesModal.js';
import LanguageModal from '../Modals/LanguageModal';
import Adaptability from '../Modals/Adaptability.js';
import ArrangementModal from '../Modals/ArrangementModal.js';
import CheckEligibility from '../Modals/CheckEligibility.js';

import { resetData } from '../../state/score';
import { useDispatch } from 'react-redux';

const Calculator = () => {
	const dispatch = useDispatch();

	const [isOpenAgeModal, setIsOpenAgeModal] = useState(false);
	const [isOpenEducationModal, setIsOpenEducationModal] = useState(false);
	const [isOpenWorkExp, setIsOpenWorkExp] = useState(false);
	const [isOpenLanguageModal, setIsOpenLanguageModal] = useState(false);
	const [isOpenAdaptability, setIsOpenAdaptability] = useState(false);
	const [isOpenArrangement, setIsOpenArrangement] = useState(false);
	const [isOpenEligible, setIsOpenEligible] = useState(false);
	const [ageScore, setAgeScore] = useState(0);
	const [eduScore, setEduScore] = useState(0);
	const [expScore, setExpScore] = useState(0);
	const [langScore, setLangScore] = useState(0);
	const [adpScore, setAdpScore] = useState(0);
	const [argScore, setArgScore] = useState(0);
	const resetCallBack = () => {
		setAgeScore(0);
		setEduScore(0);
		setExpScore(0);
		setLangScore(0);
		setAdpScore(0);
		setArgScore(0);
	};
	const openModal = (type) => {
		debugger;
		if (type == 1) {
			setIsOpenAgeModal(true);
		} else if (type == 2) {
			setIsOpenEducationModal(true);
		} else if (type == 3) {
			setIsOpenLanguageModal(true);
		} else if (type == 4) {
			setIsOpenWorkExp(true);
		} else if (type == 5) {
			setIsOpenArrangement(true);
		} else if (type == 6) {
			setIsOpenAdaptability(true);
		}
	};
	const submitModal = (obj) => {
		if (obj.type === 'age') {
			setAgeScore(obj.data);
			setIsOpenAgeModal(false);
		} else if (obj.type === 'education') {
			setEduScore(obj.data);
			setIsOpenEducationModal(false);
		} else if (obj.type === 'workExp') {
			setExpScore(obj.data);
			setIsOpenWorkExp(false);
		} else if (obj.type === 'language') {
			setLangScore(obj.data);
			setIsOpenLanguageModal(false);
		} else if (obj.type === 'adaptability') {
			setAdpScore(obj.data);
			setIsOpenAdaptability(false);
		} else if (obj.type === 'arranged') {
			setArgScore(obj.data);
			setIsOpenArrangement(false);
		}
	};
	const resetCall = () => {
		resetCallBack();
		dispatch(resetData());
	};
	return (
		<div>
			{' '}
			<div className='container calculator-wrapper'>
				<div className='header'>
					<h5>
						<b>Your Eligibility Score</b>
					</h5>
					<img className='delete-icon' src={Bin} onClick={resetCall} />
				</div>
				{/* <div>
					<div className='card-block-wrapper'>
						<div
							className='score-card'
							onClick={() => {
								openModal(1);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={12}
								value={ageScore}
								text={ageScore}
							/>
							<h5 className='card-title'>Age</h5>
						</div>

						<div
							className='score-card'
							onClick={() => {
								openModal(2);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={25}
								value={eduScore}
								text={eduScore}
							/>
							<h5 className='card-title'>Education</h5>
						</div>

						<div
							className='score-card'
							onClick={() => {
								openModal(3);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={28}
								value={langScore}
								text={langScore}
							/>
							<h5 className='card-title'>Language Proficiency</h5>
						</div>
					</div>

					<div className='card-block-wrapper'>
						<div
							className='score-card'
							onClick={() => {
								openModal(4);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={15}
								value={expScore}
								text={expScore}
							/>
							<h5 className='card-title'>Work Experience</h5>
						</div>
						<div
							className='score-card'
							onClick={() => {
								openModal(5);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={10}
								value={argScore}
								text={argScore}
							/>
							<h5 className='card-title'>Arranged Employment</h5>
						</div>
						<div
							className='score-card'
							onClick={() => {
								openModal(6);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={10}
								value={adpScore}
								text={adpScore}
							/>
							<h5 className='card-title'>Adaptability</h5>
						</div>
					</div>
				</div> */}
				<div className='row'>
					<div className='col-md-4'>
						<div
							className='score-card'
							onClick={() => {
								openModal(1);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={12}
								value={ageScore}
								text={ageScore}
							/>
							<h5 className='card-title'>Age</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div
							className='score-card'
							onClick={() => {
								openModal(2);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={25}
								value={eduScore}
								text={eduScore}
							/>
							<h5 className='card-title'>Education</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div
							className='score-card'
							onClick={() => {
								openModal(3);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={28}
								value={langScore}
								text={langScore}
							/>
							<h5 className='card-title'>Language Proficiency</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div
							className='score-card'
							onClick={() => {
								openModal(4);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={15}
								value={expScore}
								text={expScore}
							/>
							<h5 className='card-title'>Work Experience</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div
							className='score-card'
							onClick={() => {
								openModal(5);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={10}
								value={argScore}
								text={argScore}
							/>
							<h5 className='card-title'>Arranged Employment</h5>
						</div>
					</div>
					<div className='col-md-4'>
						<div
							className='score-card'
							onClick={() => {
								openModal(6);
							}}>
							<CircularProgressbar
								className='test'
								minValue={0}
								maxValue={10}
								value={adpScore}
								text={adpScore}
							/>
							<h5 className='card-title'>Adaptability</h5>
						</div>
					</div>
				</div>
				<div className='total-score'>
					<h4>
						Eligibility Score:{' '}
						{ageScore + eduScore + expScore + langScore + adpScore + argScore}
						/100
					</h4>
				</div>
				<button
					onClick={() => {
						setIsOpenEligible(true);
					}}
					type='button'
					className='button button-primary default normal icon-left mb-1'>
					Check Eligibility
				</button>
			</div>
			{isOpenAgeModal && (
				<AgeModal
					close={() => setIsOpenAgeModal(false)}
					submitModal={submitModal}
				/>
			)}
			{isOpenEducationModal && (
				<EducationModal
					close={() => setIsOpenEducationModal(false)}
					submitModal={submitModal}
				/>
			)}
			{isOpenWorkExp && (
				<WorkExperiencesModal
					close={() => setIsOpenWorkExp(false)}
					submitModal={submitModal}
				/>
			)}
			{isOpenLanguageModal && (
				<LanguageModal
					close={() => setIsOpenLanguageModal(false)}
					submitModal={submitModal}
				/>
			)}
			{isOpenAdaptability && (
				<Adaptability
					close={() => setIsOpenAdaptability(false)}
					submitModal={submitModal}
				/>
			)}
			{isOpenArrangement && (
				<ArrangementModal
					close={() => setIsOpenArrangement(false)}
					submitModal={submitModal}
				/>
			)}
			{isOpenEligible && (
				<CheckEligibility
					score={
						ageScore + eduScore + expScore + langScore + adpScore + argScore
					}
					close={() => setIsOpenEligible(false)}
				/>
			)}
		</div>
	);
};
export default Calculator;
