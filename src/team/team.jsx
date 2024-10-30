import React from "react";
import './team.css'

function Team() {
    const teamMembers = [
        {
            id: 1,
            name: "علی محمدی",
            position: "Front-end Developer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
        },
        {
            id: 2, 
            name: "مریم احمدی",
            position: "UI/UX Designer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500"
        },
        {
            id: 3,
            name: "رضا کریمی", 
            position: "Back-end Developer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500"
        },
        {
            id: 4,
            name: "سارا حسینی",
            position: "Product Manager",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
        }
    ];

    return ( 
        <div className="team_container">
            <span>تیم ما</span>
            <h2>تیم ما را بررسی کنید</h2>
            <div className="team_items">
                {teamMembers.map((member) => (
                    <div className="team_item" key={member.id}>
                        <img 
                            className="team_img" 
                            src={member.image} 
                            alt={member.name} 
                        />
                        <h4>{member.name}</h4>
                        <span>{member.position}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
