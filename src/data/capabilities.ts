export interface UnitCategory {
    name: string;
    items: string[];
}

export interface MachineUnit {
    title: string;
    images: string[];
    alt: string;
    categories: UnitCategory[];
}

export const machineUnits: MachineUnit[] = [
    {
        title: "Unit 1 – Precision & High-Volume",
        images: ["/images/heavy-duty-cnc.jpg", "/images/production-floor.jpg"],
        alt: "High volume CNC turning center facility",
        categories: [
            {
                name: "CNC Turning Centers",
                items: [
                    "6x CNC Turning Centers: LMW, ACE, & Takang (5\"-6\" Chucks)",
                    "Equipped with Multi-station LNS bar feeders for high-speed production"
                ]
            },
            {
                name: "Semi-Auto Traub Machines",
                items: [
                    "8x Semi-Auto Traubs: 6-tool turret, bar feed systems",
                    "Capacity: Through-bore Ø15 mm to Ø40 mm"
                ]
            },
            {
                name: "Support Equipment",
                items: [
                    "Auxiliary: 3x Adda Machines, 10-ton Power Press",
                    "Precision Drilling: Ø3 mm – Ø25 mm technical set"
                ]
            }
        ]
    },
    {
        title: "Unit 2 – Multi-Turret Precision",
        images: ["/images/drilling-station.jpg", "/images/milling-center.jpg"],
        alt: "Multi-turret precision machining setup",
        categories: [
            {
                name: "Advanced Turning",
                items: [
                    "4x Miyano CNCs: BNC Models (32/25/42) with Turret & Sub-turret",
                    "2x Precision Turning: Koyo 42 & LMW Machining Master"
                ]
            },
            {
                name: "Support & Drill",
                items: [
                    "Support: 2x Traubs (Ø42mm) & 4-station Gang Drill",
                    "Metrology: AImicro 300 mm Geometric DRO inspection cell"
                ]
            }
        ]
    },
    {
        title: "Unit 3 – Large Component & Heavy-Duty",
        images: ["/images/turning-center-1.jpg", "/images/traub-machine.jpg"],
        alt: "Heavy duty CNC machining for large components",
        categories: [
            {
                name: "Heavy-Duty CNC",
                items: [
                    "5x Heavy-Duty CNCs: Doosan, Phillar, & Okamahowa (6\"-8\" Chucks)"
                ]
            },
            {
                name: "Processing",
                items: [
                    "Processing: Automatic Bandsaw (up to Ø240mm bundle cutting)",
                    "Metrology: AImicro 300 mm Geometric DRO inspection cell"
                ]
            }
        ]
    }
];
