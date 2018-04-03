import React from 'react'
import PropTypes from 'prop-types'

import { Query } from 'react-apollo'
import { Row, Col, PanelGroup, Panel } from 'react-bootstrap'

import { JOBS_QUERY } from '../../graphql/core/jobs/jobs.queries'

const Job = ({ job: { _id, company, from, to, position, stack } }) => {
	return (
		<Panel eventKey={_id}>
			<Panel.Heading>
				<Panel.Title toggle>{company}</Panel.Title>
			</Panel.Heading>
			<Panel.Body collapsible>
				<Row>
					<Col xs={4} md={4}>
						<Row>
							<Col xs={12} md={12}>
								<strong>From: {from}</strong>
							</Col>
							<Col xs={12} md={12}>
								<strong>To: {to}</strong>
							</Col>
						</Row>
					</Col>
					<Col xs={8} md={8}>
						<Row>
							<Col xs={12} md={12}>
								<strong>Position: {position}</strong>
							</Col>
							<Col xs={12} md={12}>
								<strong>Tech stack and Duties:</strong>
								<ul className="dests">
									{stack.map(function(st, index) {
										return <li key={`st-${index}`}>{st.value}</li>
									})}
								</ul>
							</Col>
						</Row>
					</Col>
				</Row>
			</Panel.Body>
		</Panel>
	)
}
Job.propTypes = {
	job: PropTypes.object.isRequired,
}

const Jobs = ({ jobs }) => {
	// console.log(props)

	return (
		<>
			<h3>Work expirience</h3>
			<PanelGroup accordion id="accordion-example">
				{jobs.map(job => {
					return <Job key={`job-${job._id}`} job={job} />
				})}
			</PanelGroup>
		</>
	)
}

Jobs.propTypes = {
	jobs: PropTypes.array.isRequired,
}

const JobsWithData = () => (
	<Query query={JOBS_QUERY}>
		{({ loading, data: { jobs } }) => {
			if (loading) return <span>loading....</span>
			return <Jobs jobs={jobs} />
		}}
	</Query>
)

export default JobsWithData
