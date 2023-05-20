import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ToyTab = () => {
    const [activeTab, setActiveTab] = useState(0);


    const handleTabSelect = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const subCategories = [
        {
            id: '1',
            tab: 'Sports car',
            subCategories: ['Supercars: Supercars are high-performance sports cars known for their exceptional speed, acceleration, and cutting-edge technology. They often feature powerful engines, aerodynamic designs, and advanced features. Examples of supercars include the Bugatti Veyron, Lamborghini Aventador, and Ferrari LaFerrari.', 'Muscle Cars: Muscle cars are typically American-made sports cars with powerful engines and a focus on straight-line speed and acceleration. They are known for their aggressive and muscular appearance, often featuring large V8 engines. Iconic muscle cars include the Ford Mustang, Chevrolet Camaro, and Dodge Challenger.', 'Sports Coupes: Sports coupes are two-door sports cars known for their sleek and stylish designs, balanced performance, and handling capabilities. They often prioritize a combination of speed, agility, and comfort. Popular sports coupe models include the Porsche 911, BMW M4, and Chevrolet Corvette.'],
        },
        {
            id: '2',
            tab: 'Truck',
            subCategories: ['Monster Trucks: Monster trucks are large, rugged toy trucks that are designed to resemble the real-life monster trucks used in events like monster truck rallies and competitions. They typically feature oversized tires, suspension systems, and exaggerated body designs. Monster trucks are known for their ability to perform stunts like jumps and crushing cars. Examples of popular monster truck toys include Grave Digger, Bigfoot, and Max-D.', 'Construction Trucks: Construction truck toys are replicas of vehicles used in construction and engineering work. These toys often include dump trucks, excavators, bulldozers, and cranes. They are designed to mimic the functionality of their real-life counterparts, featuring moving parts and realistic details. Construction truck toys are popular among children who enjoy imaginative play and building scenarios.', 'Off-Road Trucks: Off-road truck toys are designed to mimic the appearance and capabilities of rugged, all-terrain vehicles used for off-road driving. They often feature larger wheels, higher ground clearance, and sturdy suspension systems. These toys are suitable for outdoor play and can handle various terrains such as sand, rocks, and dirt. Off-road truck toys are popular among children who enjoy adventurous and off-road-themed play.'],
        },
        {
            id: '3',
            tab: 'Mini Fire Truck',
            subCategories: ['Die-cast Mini Fire Trucks: Die-cast mini fire trucks are small-scale replicas of fire trucks made from die-cast metal. These collectible toys often have intricate details, including realistic paint jobs, movable parts, and functioning features like extendable ladders or rotating water cannons. Die-cast mini fire trucks are popular among collectors and enthusiasts who appreciate the craftsmanship and authenticity of these miniature vehicles.', 'Remote Control Mini Fire Trucks: Remote control mini fire trucks are toy vehicles that can be controlled wirelessly using a remote control device. These mini fire trucks often have working lights, sirens, and functional features such as extending ladders or water spraying capabilities. Remote control mini fire trucks provide children with an interactive play experience, allowing them to simulate emergency scenarios and navigate obstacles.', 'LEGO Mini Fire Trucks: LEGO mini fire trucks are buildable toy sets made from LEGO bricks. These sets allow children to construct their own mini fire trucks using LEGO pieces and instructions. LEGO mini fire trucks often include details such as an adjustable ladder, compartments for equipment storage, and mini-figures of firefighters. These sets promote creativity, problem-solving, and fine motor skills development through building and imaginative play.'],
        },
    ];
    return (
        <div>
            <p className='text-center font-bold text-xl md:text-5xl py-8'>Shop by category</p>
            <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                <TabList className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {subCategories.map((category, index) => (
                        <Tab
                            key={index}
                            className={`px-4 py-2 mx-1 rounded cursor-pointer text-center ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                        >
                            {category.tab}
                        </Tab>
                    ))}
                </TabList>

                {subCategories.map((category, index) => (
                    <TabPanel key={index}>
                        <h3 className="text-lg font-bold mt-4 text-center">{`Sub-Categories for ${category.tab}`}</h3>
                        <ul className="mt-2 ml-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                            {category.subCategories.map((subCategory, subIndex) => (
                                <li key={subIndex} className="mb-2">
                                    {subCategory}
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ToyTab;