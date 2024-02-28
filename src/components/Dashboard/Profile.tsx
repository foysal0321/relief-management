
function Profile() {
    return (
        <div>
            <div className="stats shadow w-full p-10">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Completed Project</div>
                    <div className="stat-value text-primary">50+</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Running Project</div>
                    <div className="stat-value text-secondary">10</div>
                    <div className="stat-desc">30% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-16">
                                <span className="text-3xl">D</span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">90+</div>
                    <div className="stat-title">Total Donars</div>

                </div>
            </div>
        </div>
    )
}

export default Profile
