/** LAYOUT */
import DefaultLayout from '@layouts/Default';
/** END LAYOUT */

function Home() {
	return (
		<DefaultLayout>
			<div>{process.env.SITE_NAME}</div>
		</DefaultLayout>
	)
}

export default Home;