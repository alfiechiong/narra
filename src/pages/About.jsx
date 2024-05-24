import React from 'react';
import ButtonHeadless from '@/components/ButtonHeadless';
import Layout from '@/components/Layout';



const links = [
    { href: '/settings', label: 'Settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/News', label: 'News' },
    { href: '/alfie', label: 'alfie' },
]

const links2 = [
    { href: '/one', label: 'one' },
    { href: '/two', label: 'two' },
]

const About = () => {
    return (
        <Layout>
            <div>
                <h1>About</h1>
                <p>Sample Headless UI Reusable button</p>
                <div className="min-h-screen bg-gray-100 flex items-center justify-center space-x-4">
                    <ul>
                        <li>
                            <h3>REUSABLE AS A BUTTON: USING PRIMARY COLOR</h3>
                            <ButtonHeadless variant="primary" type="dropdown" links={links2}>Primary saan</ButtonHeadless>
                        </li>
                        <li> 
                            <h3>REUSABLE TYPE AS A DROP DOWN</h3>
                            <ButtonHeadless type="dropdown" links={links} >Dropdown</ButtonHeadless>
                        </li>

                        <li> 
                            <h3>REUSABLE TYPE AS A SELECT</h3>
                            <ButtonHeadless variant="secondary" type="select" links={links}>Select</ButtonHeadless> 
                        </li>


                    </ul>
                    
                </div>
            </div>
        </Layout>
    );
};

export default About;