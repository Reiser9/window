import React from 'react';

import Tabs from '../../Components/Tabs/Tabs.jsx';
import Review from '../../Components/Review/Review.jsx';
import TextBlock from '../../Components/TextBlock/TextBlock.jsx';
import Form from '../../Components/Form/Form.jsx';
import MainBlock from '../../Components/MainBlock/MainBlock.jsx';
import Tarifs from '../../Components/Tarifs/Tarifs.jsx';
import Send from '../../Components/Send/Send.jsx';
import Advantages from '../../Components/Advantages/Advantages.jsx';
import Choose from '../../Components/Choose/Choose.jsx';
import Gallery from '../../Components/Gallery/Gallery.jsx';
import GreyBlock from '../../Components/GreyBlock/GreyBlock.jsx';
import Material from '../../Components/Material/Material.jsx';
import HowWork from '../../Components/HowWork/HowWork.jsx';
import OurWork from '../../Components/OurWork/OurWork.jsx';

const Template = () => {
	return(
		<main>
            <MainBlock />
            <Tarifs />
            <Send />
            <Advantages />
            <Tabs />
            <Choose />
            <Gallery />
            <GreyBlock />
            <Material />
            <HowWork />
            <OurWork />
            <Review />
            <TextBlock />
            <Form bg />
        </main>
	)
}

export default Template;