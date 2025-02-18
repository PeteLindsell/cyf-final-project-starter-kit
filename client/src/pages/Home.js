import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

export function Home() {
	const [cohorts, setCohorts] = useState([]);

	useEffect(() => {
		fetch("/api/cohorts")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setCohorts(body);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<img
					className="logo"
					data-qa="logo"
					src={logo}
					alt="Just the React logo"
				/>
				<h1 className="message" data-qa="message">
					Cohorts test trigger build 🚀
				</h1>
				<Link to="/about/this/site">About</Link>
				{console.log(cohorts)}
				{!!cohorts.length && (
          <ul>
            {cohorts.map((cohorts) => (
              <li key={cohorts.id}>
                <h2>{cohorts.name}</h2>
                <p>{cohorts.start_date}</p>
              </li>
            ))}
          </ul>
        )}
			</div>
		</main>
	);
}

export default Home;
