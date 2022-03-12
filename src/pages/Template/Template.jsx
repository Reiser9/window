import React from 'react';

import Single from '../../Components/Single/Single.jsx';
import Tabs from '../../Components/Tabs/Tabs.jsx';
import Works from '../../Components/Works/Works.jsx';
import InfoBlock from '../../Components/InfoBlock/InfoBlock.jsx';
import Review from '../../Components/Review/Review.jsx';
import TextBlock from '../../Components/TextBlock/TextBlock.jsx';
import Form from '../../Components/Form/Form.jsx';

const Template = () => {
	return(
		<main>
            <Single />
            <Tabs />
            <Works />
            <InfoBlock />
            <Review />
            <TextBlock />
            <Form />
        </main>
	)
}

export default Template;