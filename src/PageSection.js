import React from 'react'

const PageSection = (props) => {
	return (
		<div
			id="dhmmaudio"
			className="container-fluid py-5"
			style={{ background: `url(${props.bgImage}) no-repeat top`, backgroundSize: 'cover' }}
		>
			<div className="container d-flex h-100 justify-content-center py-5">
				<div className="row row-cols align-items-center justify-content-around">
					<div className="col justify-content-center">
						<h2
							className="text-light font-weight-bold text-center mb-2"
							style={{ textShadow: '0px 0px 5px #000000' }}
						>
							{props.titleText}
						</h2>
						<p className="text-light text-center mb-5" style={{ textShadow: '0px 0px 5px #000000' }}>
							{props.bodyText}
						</p>
						<div className="container mb-4 text-center">
							<a href={props.btnURL}>
								<button type="button" className="btn btn-outline-light btn-lg rounded-pill">
									{props.btnText}
									<svg
										width="1em"
										height="1em"
										viewBox="0 0 16 16"
										className="bi bi-chevron-right"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageSection
